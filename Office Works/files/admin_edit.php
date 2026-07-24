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
<title>Edit — <?= htmlspecialchars($row['patient_name']) ?></title>
<style>
    body { font-family: Calibri, 'Segoe UI', Arial, sans-serif; background:#e9e9e9; margin:0; padding:32px 12px; }
    .sheet { max-width:760px; margin:0 auto; background:#fff; padding:40px 48px; box-shadow:0 1px 4px rgba(0,0,0,.15); }
    h1 { font-size:14pt; margin:0 0 24px; }
    .back { display:inline-block; margin-bottom:18px; font-size:10.5pt; color:#3b6fb5; text-decoration:none; }
    label { display:block; font-size:10.5pt; margin-bottom:4px; color:#333; }
    .field { margin-bottom:18px; }
    input[type=text], input[type=date] {
        width:100%; padding:8px 10px; font-size:11pt; font-family:inherit;
        border:1px solid #bbb; border-radius:3px; box-sizing:border-box;
    }
    .yesno { display:flex; gap:20px; margin-top:4px; }
    .yesno label { display:flex; align-items:center; gap:6px; font-size:11pt; }
    .save-btn {
        font-family:inherit; font-size:11.5pt; font-weight:bold; background:#1a1a1a; color:#fff;
        border:none; padding:11px 32px; border-radius:3px; cursor:pointer; margin-top:10px;
    }
    .save-btn:hover { background:#333; }
</style>
</head>
<body>
<div class="sheet">
    <a class="back" href="admin.php">&larr; Back to list</a>
    <h1>Edit Submission #<?= $row['id'] ?></h1>

    <form action="admin_update.php" method="POST">
        <input type="hidden" name="id" value="<?= $row['id'] ?>">

        <div class="field">
            <label for="patient_name">Patient's Name</label>
            <input type="text" id="patient_name" name="patient_name" value="<?= htmlspecialchars($row['patient_name']) ?>" required>
        </div>

        <div class="field">
            <label for="form_date">Date</label>
            <input type="date" id="form_date" name="form_date" value="<?= htmlspecialchars($row['form_date']) ?>" required>
        </div>

        <div class="field">
            <label for="q1_duration">How long have you been a diabetic?</label>
            <input type="text" id="q1_duration" name="q1_duration" value="<?= htmlspecialchars($row['q1_duration']) ?>" required>
        </div>

        <div class="field">
            <label for="q2_check_frequency">How often do you check your blood sugar?</label>
            <input type="text" id="q2_check_frequency" name="q2_check_frequency" value="<?= htmlspecialchars($row['q2_check_frequency']) ?>" required>
        </div>

        <?php foreach ($YES_NO_LABELS as $field => $label): ?>
        <div class="field">
            <label><?= htmlspecialchars($label) ?></label>
            <div class="yesno">
                <label><input type="radio" name="<?= $field ?>" value="Yes" <?= $row[$field] === 'Yes' ? 'checked' : '' ?> required> Yes</label>
                <label><input type="radio" name="<?= $field ?>" value="No" <?= $row[$field] === 'No' ? 'checked' : '' ?>> No</label>
            </div>
        </div>
        <?php endforeach; ?>

        <button type="submit" class="save-btn">Save Changes</button>
    </form>
</div>
</body>
</html>
