const express = require('express');
const validate = require('../../middlewares/validate');
const upload = require('../../middlewares/upload');
const resumeValidation = require('../../validations/resume.validation');
const resumeController = require('../../controllers/resume.controller');

const router = express.Router();

router
	.route('/')
	.post(
		upload.single('file'),
		validate(resumeValidation.uploadResume),
		resumeController.uploadResume
	)
	.get(validate(resumeValidation.getResumes), resumeController.getResumes);

router
	.route('/:resumeId')
	.get(validate(resumeValidation.getResume), resumeController.getResume)
	.delete(validate(resumeValidation.deleteResume), resumeController.deleteResume);

module.exports = router;