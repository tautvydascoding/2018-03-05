<?php

// test
// print_r(  $_POST );

$elPastas =  $_POST['pastas'];
$klientoAntraste =  $_POST['antraste'];
$klientoKlausimas =  $_POST['klausimas'];

// test
// echo $elPastas . $klientoAntraste . $klientoKlausimas ;

//Load Composer's autoloader
require 'libs/PHPMailer-master/PHPMailerAutoload.php';

$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try {
    //Server settings
    $mail->SMTPDebug = 3;                                 // Enable verbose debug output
    // papildomi PhpMailer nustatymia, jeigu neveikia su standartiniais

    $mail->SMTPOptions = array(
        'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
        )
    );
    $mail->Host = 'tls://smtp.gmail.com:587';
    $mail->SMTPSecure = 'ssl';                              // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 465;                                      // TCP port to connect to

    //Server settings
    $mail->SMTPDebug = 2;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP

    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'xxxxxx@gmail.com';          // SMTP username
    $mail->Password = 'xxxxxxpassword';                    // SMTP username

    //Recipients
    $mail->setFrom('testascoding@gmail.com', 'Puslapiu kurejai----');
    $mail->addAddress('testascoding@gmail.com', 'Puslapiu kurejai');     // Add a recipient
    $mail->addReplyTo($elPastas, 'Kliento vardas');

    //Attachments
    // $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = $klientoAntraste;
    $mail->Body    = $klientoKlausimas;
    $mail->AltBody = $klientoKlausimas;

      $mail->send();

    $zinute = "Sveikinu, jusu laiskas issiustas";
    $_SESSION['zinutes'] = $zinute;
     // print_r( $GLOBALS );
    //createDoctor($elPastas, $klientoAntraste);

    echo 'Message has been sent';
} catch (Exception $e) {
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
}
