module.exports = {
	postgres: {
		query: jest.fn().mockResolvedValue({ rows: [] }),
	},
};