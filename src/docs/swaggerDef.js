const { version } = require('../../package.json');
const config = require('../config/config');
const swaggerDef = {
	openapi: '3.0.0',
	info: {
		title: 'AI Resume Analyzer API',
		version,
		description:
			'Upload a resume, analyze it with AI, and receive an ATS compatibility score, identified skills, gaps, and actionable improvement suggestions.',
		license: {
			name: '',
			url: '',
		},
	},
	servers: [
		{
			url: `http://localhost:${config.port}/v1`,
		},
	],
	tags: [
		{ name: 'Resumes', description: "Resume upload and AI-powered analysis" },
		{ name: 'Auth', description: 'Authentication' },
		{ name: 'Users', description: 'User management and retrieval' },
		{ name: 'Roles', description: 'Role management and retrieval' },
	],
};
module.exports = swaggerDef;