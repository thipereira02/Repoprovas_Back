/* eslint-disable no-undef */
import supertest from 'supertest';
import { getConnection } from 'typeorm';

import app, { init } from '../../src/app';
import { createTest } from '../factories/testFactory';

beforeAll(async () => {
  await init();
});

afterAll(async () => {
  await getConnection().close();
});

describe('GET /teachers/:subjectId', () => {
  it('should answer with status 404 when subject id is invalid or nonexistent', async () => {
    const response = await supertest(app).get('/teachers/0');
    expect(response.status).toBe(404);
  });

  it('should answer with status 200 when teachers are returned', async () => {
    const response = await supertest(app).get('/teachers/2');
    expect(response.status).toBe(200);
  });
});
