module.exports = (sequelize, DataTypes) => {
	const resume_feedback = sequelize.define(
		'resume_feedback',
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			resume_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			ats_score: {
				type: DataTypes.INTEGER,
				allowNull: true,
			},
			tone_score: {
				type: DataTypes.INTEGER,
				allowNull: true,
			},
			content_score: {
				type: DataTypes.INTEGER,
				allowNull: true,
			},
			structure_score: {
				type: DataTypes.INTEGER,
				allowNull: true,
			},
			skills_score: {
				type: DataTypes.INTEGER,
				allowNull: true,
			},
			overall_score: {
				type: DataTypes.INTEGER,
				allowNull: true,
			},
			tips: {
				type: DataTypes.JSONB,
				allowNull: true,
			},
			raw_llm_response: {
				type: DataTypes.JSONB,
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
			tableName: 'resume_feedback',
		}
	);
	resume_feedback.associate = (models) => {
		resume_feedback.belongsTo(models.resume, {
			foreignKey: 'resume_id',
			onDelete: 'CASCADE',
		});
	};
	return resume_feedback;
};