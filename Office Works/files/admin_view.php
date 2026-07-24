<?php
require_once __DIR__ . '/admin_auth.php';
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/field_labels.php';

$id = (int) ($_GET['id'] ?? 0);
$stmt = $conn->prepare("SELECT * FROM diabetic_history WHERE id = ?");
$stmt->bind_param("i", $id);
$stmt->execute();
$row = $stmt->get_result()->fetch_assoc();

if (!$row) {
    die("Record not found.");
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Preview — <?= htmlspecialchars($row['patient_name']) ?></title>
<style>
    body { font-family: Calibri, 'Segoe UI', Arial, sans-serif; background:#e9e9e9; margin:0; padding:32px 12px; }
    .sheet { max-width:760px; margin:0 auto; background:#fff; padding:40px 48px; box-shadow:0 1px 4px rgba(0,0,0,.15); }
    h1 { font-size:14pt; text-align:center; margin:0 0 4px; }
    .sub { text-align:center; font-size:11pt; color:#444; margin:0 0 24px; }
    .row { display:flex; justify-content:space-between; padding:10px 0; border-bottom:1px solid #eee; font-size:11pt; gap:20px; }
    .row .label { color:#333; }
    .row .value { font-weight:bold; text-align:right; }
    .value.yes { color:#b3261e; }
    .back { display:inline-block; margin-bottom:18px; font-size:10.5pt; color:#3b6fb5; text-decoration:none; }
</style>
</head>
<body>
<div class="sheet">
    <a class="back" href="admin.php">&larr; Back to list</a>
    <h1>Diabetic History — Preview</h1>
    <p class="sub"><?= htmlspecialchars($row['patient_name']) ?> &middot; <?= htmlspecialchars($row['form_date']) ?></p>

    <div class="row"><span class="label">How long have you been a diabetic?</span><span class="value"><?= htmlspecialchars($row['q1_duration']) ?></span></div>
    <div class="row"><span class="label">How often do you check blood sugar?</span><span class="value"><?= htmlspecialchars($row['q2_check_frequency']) ?></span></div>

    <?php foreach ($YES_NO_LABELS as $field => $label): ?>
        <div class="row">
            <span class="label"><?= htmlspecialchars($label) ?></span>
            <span class="value <?= $row[$field] === 'Yes' ? 'yes' : '' ?>"><?= htmlspecialchars($row[$field]) ?></span>
        </div>
    <?php endforeach; ?>

    <div class="row"><span class="label">Submitted at</span><span class="value"><?= htmlspecialchars($row['submitted_at']) ?></span></div>
    <div class="row"><span class="label">IP address</span><span class="value"><?= htmlspecialchars($row['ip_address']) ?></span></div>
</div>
</body>
</html>
