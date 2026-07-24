-- Diabetic History Form — Full local setup script
-- Creates the database AND the table in one go.
-- Run this once on your local MySQL server.

CREATE DATABASE IF NOT EXISTS diabetic_form
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

USE diabetic_form;

CREATE TABLE IF NOT EXISTS diabetic_history (
    id                      INT AUTO_INCREMENT PRIMARY KEY,
    patient_name            VARCHAR(150) NOT NULL,
    form_date               DATE NOT NULL,

    q1_duration             VARCHAR(255),          -- How long have you been a diabetic?
    q2_check_frequency      VARCHAR(255),          -- How often do you check blood sugar?
    q3_hypoglycemia         ENUM('Yes','No'),
    q4_weight_change        ENUM('Yes','No'),
    q5_frequent_urination   ENUM('Yes','No'),
    q6_tingling_feet        ENUM('Yes','No'),
    q7_seen_eye_doctor      ENUM('Yes','No'),
    q8_diabetic_eye_dx      ENUM('Yes','No'),
    q9_kidney_disease       ENUM('Yes','No'),

    submitted_at            TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ip_address              VARCHAR(45)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Optional: create a dedicated local user for this app instead of using root.
-- Uncomment and edit the password below if you want one.
-- CREATE USER IF NOT EXISTS 'diabetic_user'@'localhost' IDENTIFIED BY 'your_password_here';
-- GRANT ALL PRIVILEGES ON diabetic_form.* TO 'diabetic_user'@'localhost';
-- FLUSH PRIVILEGES;
