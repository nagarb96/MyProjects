<?php
// ── Database connection settings ─────────────────────────────────
// Fill these in with the values from your cPanel > MySQL Databases page.
// cPanel usually prefixes both the database name and the username
// with your account name, e.g. "cpaneluser_diabetic".

$DB_HOST = "localhost";
$DB_NAME = "cpaneluser_diabetic";
$DB_USER = "cpaneluser_dbuser";
$DB_PASS = "your_password_here";

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

try {
    $conn = new mysqli($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME);
    $conn->set_charset("utf8mb4");
} catch (mysqli_sql_exception $e) {
    error_log("DB connection failed: " . $e->getMessage());
    die("Sorry, we couldn't connect to the database right now. Please try again later.");
}
