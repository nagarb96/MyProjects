<?php
require_once __DIR__ . '/admin_auth.php';
require_once __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header("Location: admin.php");
    exit;
}

function clean($value) {
    return trim($value ?? '');
}

$id           = (int) ($_POST['id'] ?? 0);
$patient_name = clean($_POST['patient_name'] ?? '');
$form_date    = clean($_POST['form_date'] ?? '');
$q1           = clean($_POST['q1_duration'] ?? '');
$q2           = clean($_POST['q2_check_frequency'] ?? '');

$yes_no_fields = [
    'q3_hypoglycemia', 'q4_weight_change', 'q5_frequent_urination',
    'q6_tingling_feet', 'q7_seen_eye_doctor', 'q8_diabetic_eye_dx', 'q9_kidney_disease',
];

$yes_no_values = [];
foreach ($yes_no_fields as $field) {
    $val = clean($_POST[$field] ?? '');
    if (!in_array($val, ['Yes', 'No'], true)) {
        die("Invalid submission.");
    }
    $yes_no_values[$field] = $val;
}

if ($id <= 0 || $patient_name === '' || $form_date === '' || $q1 === '' || $q2 === '') {
    die("Missing required fields.");
}

$stmt = $conn->prepare(
    "UPDATE diabetic_history SET
        patient_name = ?, form_date = ?, q1_duration = ?, q2_check_frequency = ?,
        q3_hypoglycemia = ?, q4_weight_change = ?, q5_frequent_urination = ?,
        q6_tingling_feet = ?, q7_seen_eye_doctor = ?, q8_diabetic_eye_dx = ?,
        q9_kidney_disease = ?
     WHERE id = ?"
);

$stmt->bind_param(
    "sssssssssssi",
    $patient_name,
    $form_date,
    $q1,
    $q2,
    $yes_no_values['q3_hypoglycemia'],
    $yes_no_values['q4_weight_change'],
    $yes_no_values['q5_frequent_urination'],
    $yes_no_values['q6_tingling_feet'],
    $yes_no_values['q7_seen_eye_doctor'],
    $yes_no_values['q8_diabetic_eye_dx'],
    $yes_no_values['q9_kidney_disease'],
    $id
);

$stmt->execute();
$stmt->close();
$conn->close();

header("Location: admin.php?updated=1");
exit;
