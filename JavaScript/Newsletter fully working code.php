<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load WordPress environment
require_once $_SERVER['DOCUMENT_ROOT'] . '/wp-load.php';

// Load PHPMailer from WordPress Core
require_once ABSPATH . 'wp-includes/PHPMailer/PHPMailer.php';
require_once ABSPATH . 'wp-includes/PHPMailer/Exception.php';
require_once ABSPATH . 'wp-includes/PHPMailer/SMTP.php';

header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);

    if (!isset($data['email']) || !filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["success" => false, "message" => "Invalid email address"]);
        exit;
    }

    $email = $data['email'];
    $firstName = $data['firstName'] ?? null;
    $phoneNumber = $data['phoneNumber'] ?? null;
    $step = $data['step'] ?? '1'; // Step 1, Step 2, or fallback

    // Capture the referring URL
    $pageURL = $_SERVER['HTTP_REFERER'] ?? "Unknown Page";

    $mail = new PHPMailer(true);

    try {
        // SMTP Configuration
        $mail->isSMTP();
        $mail->Host = 'smtp.titan.email';
        $mail->SMTPAuth = true;
        $mail->Username = 'noreply@mypracticecare.com';
        $mail->Password = 'NpP@8002@PasWPWPad';
        $mail->SMTPSecure = 'tls';        
        $mail->Port = 587;

        $ownerEmailBody = "
            <p>Hello Team,</p>
            <p>A new consultation request has been received via <a href='$pageURL'>$pageURL</a> form.</p>
            <p><strong>Email Address:</strong> $email</p>
        ";

        if ($step === '2' || ($step === 'fallback' && (!$firstName || !$phoneNumber))) {
            if ($firstName) $ownerEmailBody .= "<p><strong>Name:</strong> $firstName</p>";
            if ($phoneNumber) $ownerEmailBody .= "<p><strong>Phone:</strong> $phoneNumber</p>";
            $ownerEmailBody .= "<p>Please follow up with the user to schedule their consultation.</p><p>Thanks<br>myPractice Care</p>";

            $mail->setFrom('noreply@mypracticecare.com', 'myPractice Care');
            $mail->addAddress('eleadsolution4@gmail.com');
            $mail->Subject = "New Consultation Request Received";
            $mail->isHTML(true);
            $mail->Body = $ownerEmailBody;
            $mail->send();
        }

        // Send single confirmation email to user
        $mail->clearAddresses();
        $mail->addAddress($email);
        $mail->Subject = "Your Consultation Request Has Been Received - myPractice Care";
        $mail->isHTML(true);

        $userEmailBody = $firstName && $phoneNumber ? "
            <p>Hello $firstName,</p>
            <p>Thanks for requesting a consultation with myPractice Care. We’ve received your request and will be reaching out shortly to discuss your needs and how we can support your practice.</p>
            <p>Please note: This is a system-generated message. Replies to this email are not monitored.</p>
            <p>In the meantime, feel free to explore our services at [www.mypracticecare.com].</p>
            <p>We look forward to connecting with you!</p>
            <p>Thanks,<br>myPractice Care Team</p>
        " : "
            <p>Hello $firstName,</p>
            <p>Thanks for requesting a consultation with myPractice Care. We’ve received your request and will be reaching out shortly to discuss your needs and how we can support your practice.</p>
            <p>Please note: This is a system-generated message. Replies to this email are not monitored.</p>
            <p>In the meantime, feel free to explore our services at [www.mypracticecare.com].</p>
            <p>We look forward to connecting with you!</p>
            <p>Thanks,<br>myPractice Care Team</p>
        ";

        $mail->Body = $userEmailBody;
        $mail->send();

        echo json_encode(["success" => true, "message" => "Email sent successfully"]);
    } catch (Exception $e) {
        echo json_encode(["success" => false, "message" => "Email failed: " . $mail->ErrorInfo]);
    }
}





