# AI Resume Analyzer API

A backend REST API that analyzes resumes using AI, providing ATS-compatibility scores and actionable feedback. Users can upload a PDF resume, have it automatically parsed and analyzed by an LLM, and retrieve structured feedback on formatting, content, and skills presentation.

## Features

- JWT-based authentication with access and refresh tokens
- Role-based access control
- Resume upload with PDF parsing (text extraction)
- AI-powered resume analysis (ATS score, tone, content, structure, and skills scoring, plus actionable tips) via Google's Gemini API
- Ownership-based authorization — users can only access their own resumes
- PostgreSQL database with Sequelize ORM and versioned migrations

## Tech Stack

- **Runtime**: Node.js, Express.js
- **Database**: PostgreSQL, Sequelize ORM
- **Authentication**: JWT (access + refresh tokens)
- **File handling**: Multer (uploads), pdf-parse (text extraction)
- **AI**: Google Gemini API
- **Validation**: Joi

## Project Structure

src/
|--config/ # Environment variables and configuration
|--controllers/ # Route controllers
|--db/
|--config/ # Database CLI configuration
|--migrations/ # Database migrations
|--models/ # Sequelize models
|--middlewares/ # Custom Express middlewares (auth, validation, file upload)
|--routes/ # API routes
|--services/ # Business logic (service layer)
|--utils/ # Utility classes and functions
|--validations/ # Request validation schemas
|--app.js # Express app
|--index.js # App entry point

## API Endpoints

**Auth routes**:
`POST /v1/auth/register` — register
`POST /v1/auth/login` — login
`POST /v1/auth/forgot-password` — forgot password
`POST /v1/auth/reset-password` — reset password

**Resume routes** (requires authentication):
`POST /v1/resumes` — upload a resume (PDF, multipart/form-data), with optional `jobTitle`/`jobDescription`
`GET /v1/resumes` — list your own resumes, paginated
`GET /v1/resumes/:resumeId` — get a single resume, including any feedback
`DELETE /v1/resumes/:resumeId` — delete a resume
`POST /v1/resumes/:resumeId/analyze` — analyze a resume with AI, generating scores and feedback

**User routes**:
`GET /v1/users` — get all users
`GET /v1/users/:userId` — get a user
`PATCH /v1/users/:userId` — update a user
`DELETE /v1/users/:userId` — delete a user

## Database Schema

- **user** — user accounts (existing)
- **role** — roles for access control (existing)
- **resume** — uploaded resumes, linked to a user, including extracted text and job context
- **resume_feedback** — AI-generated feedback for a resume, including scores and tips (JSONB)

## Getting Started

### Prerequisites
- Node.js
- PostgreSQL
- A Google Gemini API key ([aistudio.google.com](https://aistudio.google.com))

### Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env` and configure your database credentials, JWT secret, and `GEMINI_API_KEY`
4. Run database migrations: `node_modules/.bin/sequelize db:migrate`
5. Start the server: `npm run dev`

### API Documentation
Once running, view the auto-generated Swagger docs at `http://localhost:3000/v1/docs`

## About This Project

This project is built on top of an open-source Node.js/Express/PostgreSQL boilerplate ([japananh/node-express-postgres-boilerplate](https://github.com/japananh/node-express-postgres-boilerplate)), which provided the initial authentication and role-based access control foundation. On top of that foundation, I designed and built:

- The `resume` and `resume_feedback` database schema and migrations
- Resume upload handling with Multer
- PDF text extraction with pdf-parse
- Integration with Google's Gemini API for AI-powered resume analysis
- All resume-related services, controllers, routes, and validation
- Ownership-based authorization for resume access

## License

To be updated