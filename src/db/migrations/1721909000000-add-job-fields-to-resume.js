module.exports = {
	up: (queryInterface, Sequelize) =>
		Promise.all([
			queryInterface.addColumn('resume', 'job_title', {
				type: Sequelize.STRING,
				allowNull: true,
			}),
			queryInterface.addColumn('resume', 'job_description', {
				type: Sequelize.TEXT,
				allowNull: true,
			}),
		]),
	down: (queryInterface /* , Sequelize */) =>
		Promise.all([
			queryInterface.removeColumn('resume', 'job_title'),
			queryInterface.removeColumn('resume', 'job_description'),
		]),
};