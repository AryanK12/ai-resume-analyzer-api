module.exports = {
	up: (queryInterface, Sequelize) =>
		Promise.all([
			queryInterface.addColumn('resume_feedback', 'skills_found', {
				type: Sequelize.JSONB,
				allowNull: true,
			}),
			queryInterface.addColumn('resume_feedback', 'missing_skills', {
				type: Sequelize.JSONB,
				allowNull: true,
			}),
			queryInterface.addColumn('resume_feedback', 'strengths', {
				type: Sequelize.JSONB,
				allowNull: true,
			}),
			queryInterface.addColumn('resume_feedback', 'weaknesses', {
				type: Sequelize.JSONB,
				allowNull: true,
			}),
			queryInterface.addColumn('resume_feedback', 'suggestions', {
				type: Sequelize.JSONB,
				allowNull: true,
			}),
		]),
	down: (queryInterface /* , Sequelize */) =>
		Promise.all([
			queryInterface.removeColumn('resume_feedback', 'skills_found'),
			queryInterface.removeColumn('resume_feedback', 'missing_skills'),
			queryInterface.removeColumn('resume_feedback', 'strengths'),
			queryInterface.removeColumn('resume_feedback', 'weaknesses'),
			queryInterface.removeColumn('resume_feedback', 'suggestions'),
		]),
};