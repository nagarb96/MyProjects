# Diabetic History Form — Setup Guide

## Files
- `index.php` — the patient-facing form (styled to match the paper form)
- `submit.php` — receives the form and saves it to MySQL
- `thankyou.php` — confirmation page after submitting
- `admin.php` — password-protected page to view all submissions
- `config.php` — your database connection settings
- `schema.sql` — creates the database table

## Setup on cPanel (5 steps)

1. **Create the database**
   cPanel → *MySQL Databases* → create a database (e.g. `diabetic`) and a user with a strong password, then add the user to the database with **All Privileges**. Note the full names — cPanel prefixes them, e.g. `cpaneluser_diabetic` and `cpaneluser_dbuser`.

2. **Create the table**
   cPanel → *phpMyAdmin* → select your new database → *Import* tab → upload `schema.sql`.

3. **Edit `config.php`**
   Open it and fill in your real `$DB_HOST` (usually `localhost`), `$DB_NAME`, `$DB_USER`, `$DB_PASS` from step 1.

4. **Upload the files**
   Upload all `.php` files (not `schema.sql`) via *File Manager* or FTP into `public_html/` or a subfolder like `public_html/diabetic-form/`.

5. **Secure the admin page**
   Open `admin.php` and change `$ADMIN_USER` / `$ADMIN_PASS` to something private before going live. This page lists every patient's answers.

## Using it
- Patients fill out the form at `yourdomain.com/index.php` (or your subfolder).
- Every submission is saved as a new row in the `diabetic_history` table.
- Staff can review submissions at `yourdomain.com/admin.php` (login required).

## Notes
- Since this collects patient health information, make sure the site is served over **HTTPS** (cPanel usually offers free SSL under *Security → SSL/TLS Status*), and keep the admin password private. If this is used in a real clinical setting in the US, confirm with your compliance/legal contact that your hosting setup meets HIPAA requirements — standard shared hosting often does not, on its own.
- The form fields map directly to columns in `diabetic_history` — add more columns/questions by editing `schema.sql`, `index.php`, and `submit.php` together.
