-- =========================================================
-- BRACU CGPA Calculator Database Schema
-- PostgreSQL
-- =========================================================

-- Optional: delete old tables if they exist
DROP TABLE IF EXISTS user_courses CASCADE;
DROP TABLE IF EXISTS users CASCADE;

-- =========================================================
-- USERS TABLE
-- =========================================================

CREATE TABLE users (
    id SERIAL PRIMARY KEY,

    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =========================================================
-- USER COURSES TABLE
-- =========================================================

CREATE TABLE user_courses (
    id SERIAL PRIMARY KEY,

    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,

    section_id TEXT,
    original_index INTEGER,

    course_name TEXT NOT NULL,

    credits INTEGER NOT NULL DEFAULT 3,

    grade TEXT NOT NULL,

    repeat_course BOOLEAN DEFAULT FALSE,
    non_credit BOOLEAN DEFAULT FALSE,
    projected BOOLEAN DEFAULT FALSE,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =========================================================
-- INDEXES (IMPORTANT FOR PERFORMANCE)
-- =========================================================

CREATE INDEX idx_user_courses_user_id
ON user_courses(user_id);

CREATE INDEX idx_users_email
ON users(email);

-- =========================================================
-- OPTIONAL TEST USER
-- Password should be hashed in real usage
-- Remove this in production if you want
-- =========================================================

-- INSERT INTO users (email, password)
-- VALUES ('test@test.com', 'hashed_password_here');

-- =========================================================
-- OPTIONAL TEST COURSES
-- =========================================================

-- INSERT INTO user_courses (
--     user_id,
--     section_id,
--     original_index,
--     course_name,
--     credits,
--     grade,
--     repeat_course,
--     non_credit,
--     projected
-- )
-- VALUES
-- (
--     1,
--     'core-table-body',
--     0,
--     'CSE 110 Programming Language I',
--     3,
--     'A',
--     FALSE,
--     FALSE,
--     FALSE
-- );

-- =========================================================
-- SESSIONS TABLE (For production-ready authentication)
-- =========================================================

CREATE TABLE "session" (
  "sid" varchar NOT NULL COLLATE "default",
  "sess" json NOT NULL,
  "expire" timestamp(6) NOT NULL
)
WITH (OIDS=FALSE);

ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;

CREATE INDEX "IDX_session_expire" ON "session" ("expire");

-- =========================================================
-- VERIFY TABLES
-- =========================================================

SELECT * FROM users;
SELECT * FROM user_courses;
SELECT * FROM session;