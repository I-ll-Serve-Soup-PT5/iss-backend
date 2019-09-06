const request = require('supertest');

const server = require('../server');
const users = require('../data/models/usersModel');

describe('test registration', () => {
  afterAll(async () => {
    await users.clearUsers();
  });

  let id;
  
  test('correctly registers new account', () => {
    return request(server).post('/api/auth/register')
    .send({
      username: 'register_test',
      password: 'password'
    })
    .then(res => {
      expect(res.statusCode).toBe(201);
      expect(res.body).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          username: expect.any(String)
        })
      );
      id = res.body.id;
    })
    .catch(err => {
      console.log('error', err);
    });
  });

  test('DB contains new user', async () => {
    try {
      const user = await users.getUserBy({ id }).first();
      expect(user).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          username: expect.any(String),
          password: expect.any(String)
        })
      );
    } catch(err) {
      console.log(err);
    }
  });

  test('registration fails with incorrect params', () => {
    return request(server).post('/api/auth/register')
    .send({
      key: 'value'
    })
    .then(res => {
      expect(res.statusCode).toBe(400);
      expect(res.body).toEqual(
        expect.objectContaining({
          message: expect.any(String)
        })
      );
    })
    .catch(err => {
      console.log('error', err);
    });
  });
});