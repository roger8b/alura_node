const request = require('supertest');
const app = require('../../src/app');

describe('Attendant', () => {
  it('should return attendant list', async () => {
    const result = await request(app).get('/attendant');

    expect(result.status).toBe(200);
  });
});
