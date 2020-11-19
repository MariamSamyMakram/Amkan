<?php
include_once "vendor/autoload.php";
include_once "includes/send_mail.php";
include_once "includes/validations.php";
include_once "includes/response.php";

$errors = validate();

if (count($errors)) {
    returnJsonHttpResponse([
        'errors' => $errors,
        'success' => false,
    ], 422);
}

$sent = sendEmail($_POST['email'], $_POST['name'], $_POST['message']);

returnJsonHttpResponse([
    'errors' => $errors,
    'success' => true,
]);

