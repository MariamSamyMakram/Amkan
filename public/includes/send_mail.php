<?php

define('MAIL_HOST', 'secure346.sgcpanel.com');
define('MAIL_PORT', '587');
define('MAIL_USERNAME', 'ydaood@arkdev.net');
define('MAIL_PASSWORD', 'ydaood@123');
define('MAIL_FROM', 'ydaood@arkdev.net');
define('MAIL_TO', 'ydaood@arkdev.net');

/**
 * @param $email
 * @param $name
 * @param $message
 * @return int
 */
function sendEmail($email, $name, $message)
{

    $transport = (new Swift_SmtpTransport(MAIL_HOST, MAIL_PORT))
    ->setUsername(MAIL_USERNAME)
    ->setPassword(MAIL_PASSWORD);

    // Create the Mailer using your created Transport
    $mailer = new Swift_Mailer($transport);
    // Create a message
    $mailMessage = (new Swift_Message('Amkan contact us request'))
        ->setFrom([MAIL_FROM])
        ->addReplyTo($email)
        ->setTo([MAIL_TO])
        ->setBody(
"Hello Amkan Admin,

You have received a contact us message, please check its details below:
Email: {$email}
Name: {$name}
Message: {$message}

Thanks,
Amkan Team
");
    // Send the message
    $mailer->send($mailMessage, $errors);

    return  $errors;
}
