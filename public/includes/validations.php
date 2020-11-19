<?php

$fields = [
    'first_name' => 'First Name',
    'last_name' => 'Last Name',
    'email' => 'Email',
    'message' => 'Message',
];

/**
 * @return array
 */
function validate()
{
    $errors = [];
    foreach (['email', 'name', 'message'] as $field) {
        global $fields;
        if (!isset($_POST[$field]) || !(strlen($_POST[$field]) > 1)) {
            $errors[] = "{$fields[$field]} is required.";
        }
    }

    if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Email format is invalid";
    }

    return $errors;
}