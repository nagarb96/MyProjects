<?php
require_once __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header("Location: index.php");
    exit;
}

function clean($value) {
    return trim($value ?? '');
}

$patient_name = clean($_POST['patient_name'] ?? '');
$form_date    = clean($_POST['form_date'] ?? '');
$q1           = clean($_POST['q1_duration'] ?? '');
$q2           = clean($_POST['q2_check_frequency'] ?? '');

$yes_no_fields = [
    'q3_hypoglycemia',
    'q4_weight_change',
    'q5_frequent_urination',
    'q6_tingling_feet',
    'q7_seen_eye_doctor',
    'q8_diabetic_eye_dx',
    'q9_kidney_disease',
];

$yes_no_values = [];
foreach ($yes_no_fields as $field) {
    $val = clean($_POST[$field] ?? '');
    if (!in_array($val, ['Yes', 'No'], true)) {
        header("Location: index.php?error=1");
        exit;
    }
    $yes_no_values[$field] = $val;
}

if ($patient_name === '' || $form_date === '' || $q1 === '' || $q2 === '') {
    header("Location: index.php?error=1");
    exit;
}

$ip = $_SERVER['REMOTE_ADDR'] ?? '';

$stmt = $conn->prepare(
    "INSERT INTO diabetic_history
        (patient_name, form_date, q1_duration, q2_check_frequency,
         q3_hypoglycemia, q4_weight_change, q5_frequent_urination,
         q6_tingling_feet, q7_seen_eye_doctor, q8_diabetic_eye_dx,
         q9_kidney_disease, ip_address)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
);

$stmt->bind_param(
    "ssssssssssss",
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
    $ip
);

try {
    $stmt->execute();
} catch (mysqli_sql_exception $e) {
    error_log("Insert failed: " . $e->getMessage());
    header("Location: index.php?error=1");
    exit;
}

$stmt->close();
$conn->close();

header("Location: thankyou.php");
exit;
