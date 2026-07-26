module.exports = {
	up: (queryInterface, Sequelize) =>
		queryInterface.addColumn('resume', 'extracted_text', {
			type: Sequelize.TEXT,
			allowNull: true,
		}),
	down: (queryInterface /* , Sequelize */) =>
		queryInterface.removeColumn('resume', 'extracted_text'),
};