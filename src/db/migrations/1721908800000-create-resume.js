module.exports = {
	up: (queryInterface, Sequelize) =>
		queryInterface.createTable('resume', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			user_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'user',
					key: 'id',
				},
				onDelete: 'CASCADE',
			},
			file_name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			file_url: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			status: {
				type: Sequelize.STRING,
				allowNull: false,
				defaultValue: 'pending',
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
		queryInterface.dropTable('resume'),
};