const request = require('supertest');

const server = require('../server');
const users = require('../data/models/usersModel');

describe('test login/logout', () => {
  beforeAll(async () => {
    try {
      await request(server).post('/api/auth/register')
        .send({
          username: 'login_test',
          password: 'password'
        });
    } catch(err) {
      console.log('BEFORE_ERROR', err);
    }
  });
  afterAll(async () => {
    await users.clearUsers();
  });
  
  let cookie = '';

  test('correctly logs in', () => {
    return request(server).post('/api/auth/login')
      .send({
        username: 'login_test',
        password: 'password'
      })
      .then(res => {
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(
          expect.objectContaining({
            message: expect.any(String)
          })
        );
        cookie = res.headers['set-cookie'][0];
        expect(cookie).toEqual(expect.any(String));
      });
  });

  test('logout returns correct response, invalidates session', () => {
    return request(server).get('/api/auth/logout')
      .then(res => {
        expect(res.statusCode).toBe(204);
      });
  });

  test('rejects login with bad credentials', () => {
    return request(server).post('/api/auth/login')
      .send({
        username: 'login_test',
        password: 'wrong_password'
      })
      .then(res => {
        expect(res.statusCode).toBe(403);
        expect(res.body).toEqual(
          expect.objectContaining({
            message: expect.any(String)
          })
        );
      });
  });

  test('restricted routes reject unauthenticated requests', () => {
    return request(server).get('/api/ingredients')
      .then(res => {
        expect(res.statusCode).toBe(403);
      });
  });
});