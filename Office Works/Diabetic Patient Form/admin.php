<?php
require_once __DIR__ . '/admin_auth.php';
require_once __DIR__ . '/config.php';

$deleted = isset($_GET['deleted']);
$updated = isset($_GET['updated']);

$result = $conn->query("SELECT * FROM diabetic_history ORDER BY submitted_at DESC");
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Diabetic History Submissions</title>
<style>
    body { font-family: Calibri, 'Segoe UI', Arial, sans-serif; margin: 24px; color: #1a1a1a; background:#f4f4f4; }
    h1 { font-size: 15pt; }
    .notice { background:#e6f4ea; border:1px solid #2e7d32; color:#2e7d32; padding:8px 14px; margin-bottom:16px; font-size:10.5pt; display:inline-block; }
    table { border-collapse: collapse; width: 100%; font-size: 10pt; background:#fff; }
    th, td { border: 1px solid #ddd; padding: 7px 10px; text-align: left; white-space: nowrap; }
    th { background: #eee; }
    tr:nth-child(even) { background: #fafafa; }
    .yes { color: #b3261e; font-weight: bold; }
    .actions a {
        display:inline-block; margin-right:6px; padding:4px 10px;
        font-size:9.5pt; text-decoration:none; border-radius:3px; color:#fff;
    }
    .btn-view { background:#3b6fb5; }
    .btn-edit { background:#c98a1f; }
    .btn-delete { background:#b3261e; }
</style>
</head>
<body>
    <h1>Diabetic History Submissions (<?= $result->num_rows ?>)</h1>

    <?php if ($deleted): ?><div class="notice">Record deleted.</div><?php endif; ?>
    <?php if ($updated): ?><div class="notice">Record updated.</div><?php endif; ?>

    <table>
        <tr>
            <th>ID</th><th>Patient</th><th>Date</th>
            <th>Hypoglycemia</th><th>Weight Change</th><th>Freq. Urination</th>
            <th>Tingling Feet</th><th>Eye Doctor</th><th>Eye Dx</th><th>Kidney</th>
            <th>Submitted</th><th>Actions</th>
        </tr>
        <?php while ($row = $result->fetch_assoc()): ?>
        <tr>
            <td><?= htmlspecialchars($row['id']) ?></td>
            <td><?= htmlspecialchars($row['patient_name']) ?></td>
            <td><?= htmlspecialchars($row['form_date']) ?></td>
            <?php foreach (['q3_hypoglycemia','q4_weight_change','q5_frequent_urination','q6_tingling_feet','q7_seen_eye_doctor','q8_diabetic_eye_dx','q9_kidney_disease'] as $f): ?>
                <td class="<?= $row[$f] === 'Yes' ? 'yes' : '' ?>"><?= htmlspecialchars($row[$f]) ?></td>
            <?php endforeach; ?>
            <td><?= htmlspecialchars($row['submitted_at']) ?></td>
            <td class="actions">
                <a class="btn-view" href="admin_view.php?id=<?= $row['id'] ?>">View</a>
                <a class="btn-edit" href="admin_edit.php?id=<?= $row['id'] ?>">Edit</a>
                <a class="btn-delete" href="admin_delete.php?id=<?= $row['id'] ?>"
                   onclick="return confirm('Delete this patient record? This cannot be undone.');">Delete</a>
            </td>
        </tr>
        <?php endwhile; ?>
    </table>
</body>
</html>
