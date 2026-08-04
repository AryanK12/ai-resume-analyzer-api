jest.mock('../../src/config/postgres');

const request = require('supertest');
const app = require('../../src/app');
const { generateToken, generateExpires } = require('../../src/utils/auth');

function authHeader() {
	const token = generateToken({ userId: 'test-user-id' }, generateExpires(1));
	return `Bearer ${token}`;
}

describe('app', () => {
	it('serves the public docs route without requiring auth or a DB', async () => {
		const res = await request(app).get('/v1/docs/');

		expect(res.status).toBe(200);
		expect(res.type).toBe('text/html');
	});

	it('rejects requests to protected routes without a JWT', async () => {
		const res = await request(app).get('/v1/resumes');

		expect(res.status).toBe(401);
	});

	it('returns a consistent 404 shape for an unknown route once authenticated', async () => {
		const res = await request(app)
			.get('/v1/this-route-does-not-exist')
			.set('Authorization', authHeader());

		expect(res.status).toBe(404);
		expect(res.body).toEqual(
			expect.objectContaining({
				code: 404,
				message: 'Not found',
			})
		);
	});
});