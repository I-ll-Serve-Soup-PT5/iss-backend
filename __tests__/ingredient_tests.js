const request = require('supertest');

const server = require('../server');
const ingredients = require('../data/models/ingredientsModel');

describe('test crud on ingredients', () => {
  let cookie = '';
  let id = null;
  beforeAll(async () => {
    await request(server).post('/api/auth/register')
    .send({
      username: 'ingredients_test',
      password: 'password'
    });
    cookie = await request(server).post('/api/auth/login')
    .send({
      username: 'ingredients_test',
      password: 'password'
    })
    .then(res => {
      return res.headers['set-cookie'][0];
    })
  });
  afterAll(() => {
    return ingredients.clear();
  });

  test('ingredient-adding route returns correct results', () => {
    return request(server).post('/api/ingredients/add')
    .set('Cookie', cookie)
    .send({ name: 'fewd' })
    .then(res => {
      expect(res.statusCode).toBe(201);
      expect(res.body).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          name: 'fewd'
        })
      );
      id = res.body.id;
    });
  });

  test('db correctly contains added item', () => {
    return ingredients.getAll()
      .then(res => {
        expect(res.length).toBe(1);
        expect(res).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(Number),
              name: 'fewd'
            })
          ])
        );
      });
  });

  test('edit-route behaves correctly', () => {
    request(server).put(`/api/ingredients/edit/${id}`)
    .set('Cookie', cookie)
    .send({ name: 'food' })
    .then(res => {
      // oops not done
    });
  });
});