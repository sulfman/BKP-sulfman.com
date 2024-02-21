<?php
// Verify Google reCAPTCHA
$recaptcha_secret = '6Ld21nkpAAAAAAwLPI0Pf62Fl1FPGwbtAnce9-2B';
$recaptcha_response = $_POST['recaptcha_token'];

$recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
$recaptcha_data = array(
    'secret' => $recaptcha_secret,
    'response' => $recaptcha_response
);

$recaptcha_options = array(
    'http' => array(
        'method' => 'POST',
        'content' => http_build_query($recaptcha_data)
    )
);

$recaptcha_context = stream_context_create($recaptcha_options);
$recaptcha_result = file_get_contents($recaptcha_url, false, $recaptcha_context);
$recaptcha_json = json_decode($recaptcha_result);

if (!$recaptcha_json->success) {
    $response = array('success' => false, 'message' => 'reCAPTCHA verification failed.');
    echo json_encode($response);
    exit;
}

// Handle form submission
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// You can add further validation here if needed

// Send email
$to = 'faisal.farouk@sulfman.com';
$subject = 'Contact Form Submission';
$body = "Name: $name\nEmail: $email\nMessage: $message";
$headers = 'From: ' . $email;

if (mail($to, $subject, $body, $headers)) {
    $response = array('success' => true, 'message' => 'Your message has been sent successfully.');
} else {
    $response = array('success' => false, 'message' => 'Failed to send message. Please try again later.');
}

echo json_encode($response);
