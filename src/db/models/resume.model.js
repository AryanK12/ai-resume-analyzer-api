module.exports = (sequelize, DataTypes) => {
	const resume = sequelize.define(
		'resume',
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			user_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			file_name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			file_url: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			status: {
				type: DataTypes.STRING,
				allowNull: false,
				defaultValue: 'pending',
			},
			job_title: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			job_description: {
				type: DataTypes.TEXT,
				allowNull: true,
			},
			created_date_time: {
				type: DataTypes.DATE,
				defaultValue: DataTypes.NOW,
				allowNull: false,
			},
			modified_date_time: {
				type: DataTypes.DATE,
				defaultValue: DataTypes.NOW,
				allowNull: false,
			},
		},
		{
			tableName: 'resume',
		}
	);
	resume.associate = (models) => {
		resume.belongsTo(models.user, {
			foreignKey: 'user_id',
			onDelete: 'CASCADE',
		});
		resume.hasMany(models.resume_feedback, {
			foreignKey: 'resume_id',
			onDelete: 'CASCADE',
		});
	};
	return resume;
};