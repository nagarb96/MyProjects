<?php
require_once __DIR__ . '/admin_auth.php';
require_once __DIR__ . '/config.php';

$id = (int) ($_GET['id'] ?? 0);

if ($id > 0) {
    $stmt = $conn->prepare("DELETE FROM diabetic_history WHERE id = ?");
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $stmt->close();
}

$conn->close();
header("Location: admin.php?deleted=1");
exit;
