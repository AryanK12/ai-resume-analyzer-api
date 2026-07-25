module.exports = {
	up: (queryInterface, Sequelize) =>
		queryInterface.createTable('resume_feedback', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			resume_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'resume',
					key: 'id',
				},
				onDelete: 'CASCADE',
			},
			ats_score: {
				type: Sequelize.INTEGER,
				allowNull: true,
			},
			tone_score: {
				type: Sequelize.INTEGER,
				allowNull: true,
			},
			content_score: {
				type: Sequelize.INTEGER,
				allowNull: true,
			},
			structure_score: {
				type: Sequelize.INTEGER,
				allowNull: true,
			},
			skills_score: {
				type: Sequelize.INTEGER,
				allowNull: true,
			},
			overall_score: {
				type: Sequelize.INTEGER,
				allowNull: true,
			},
			tips: {
				type: Sequelize.JSONB,
				allowNull: true,
			},
			raw_llm_response: {
				type: Sequelize.JSONB,
				allowNull: true,
			},
			created_date_time: {
				type: Sequelize.DATE,
				defaultValue: Sequelize.NOW,
				allowNull: false,
			},
			modified_date_time: {
				type: Sequelize.DATE,
				defaultValue: Sequelize.NOW,
				allowNull: false,
			},
		}),
	down: (queryInterface /* , Sequelize */) =>
		queryInterface.dropTable('resume_feedback'),
};