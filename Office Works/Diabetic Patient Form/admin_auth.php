<?php
// ── Basic password protection, shared by all admin pages ────────
// CHANGE THIS PASSWORD before putting the site online.
$ADMIN_USER = "admin";
$ADMIN_PASS = "admin123";

if (!isset($_SERVER['PHP_AUTH_USER']) ||
    $_SERVER['PHP_AUTH_USER'] !== $ADMIN_USER ||
    $_SERVER['PHP_AUTH_PW'] !== $ADMIN_PASS) {
    header('WWW-Authenticate: Basic realm="Diabetic Form Admin"');
    header('HTTP/1.0 401 Unauthorized');
    echo 'Access denied.';
    exit;
}
