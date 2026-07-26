const fs = require('fs');
const pdfParse = require('pdf-parse');
const httpStatus = require('http-status');
const { getOffset } = require('../utils/query');
const ApiError = require('../utils/ApiError');
const config = require('../config/config.js');
const db = require('../db/models');

async function extractTextFromPdf(filePath) {
	try {
		const dataBuffer = fs.readFileSync(filePath);
		const data = await pdfParse(dataBuffer);
		return data.text;
	} catch (error) {
		console.error('PDF parsing error:', error.message);
		return null;
	}
}

async function createResume(userId, file, body) {
	const { jobTitle, jobDescription } = body;

	const extractedText = await extractTextFromPdf(file.path);

	const resume = await db.resume
		.create({
			user_id: userId,
			file_name: file.originalname,
			file_url: file.path,
			job_title: jobTitle || null,
			job_description: jobDescription || null,
			extracted_text: extractedText,
			status: extractedText ? 'pending' : 'failed',
		})
		.then((resultEntity) => resultEntity.get({ plain: true }));

	return resume;
}

async function getResumeById(resumeId, userId) {
	const resume = await db.resume.findOne({
		where: { id: resumeId, user_id: userId },
		include: [
			{
				model: db.resume_feedback,
				required: false,
			},
		],
	});

	return resume;
}

async function getResumes(req) {	
	const { page: defaultPage, limit: defaultLimit } = config.pagination;
	const { page = defaultPage, limit = defaultLimit } = req.query;
	const userId = req.user.userId;

	const offset = getOffset(page, limit);

	const resumes = await db.resume.findAndCountAll({
		where: { user_id: userId },
		order: [['created_date_time', 'DESC']],
		offset,
		limit,
		raw: true,
	});

	return resumes;
}

async function deleteResumeById(resumeId, userId) {
	const resume = await db.resume.findOne({
		where: { id: resumeId, user_id: userId },
	});

	if (!resume) {
		throw new ApiError(httpStatus.NOT_FOUND, 'Resume not found');
	}

	await db.resume.destroy({
		where: { id: resumeId },
	});

	return true;
}

module.exports = {
	createResume,
	getResumeById,
	getResumes,
	deleteResumeById,
};