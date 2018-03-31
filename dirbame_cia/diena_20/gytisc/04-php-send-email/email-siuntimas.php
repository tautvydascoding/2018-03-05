<?php

// print_r( $_POST );
// var_dump( $_POST );
// testavimas
$elPastas = $_POST['pastas'];
$klientoAntraste = $_POST['antraste'];
$klientoTekstas = $_POST['tekstas'];

// gmp_test
// echo $elPastas . $klientoAntraste . $klientoTekstas;



//Load Composer's autoloader
require 'libs\PHPMailer-master\PHPMailerAutoload.php';

$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try {
    //Server settings
    $mail->SMTPDebug = 2;                                 // Enable verbose debug output
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
    $mail->SMTPDebug = 3;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP

    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'edds.photo@gmail.com';                 // SMTP username
    $mail->Password = 'gIl8*oj=T9kLr726e1D6*Txa7&tCAw';                 // SMTP username

    //Recipients
    $mail->setFrom('edds.photo@gmail.com', 'Edd\'s Photo support');
    $mail->addAddress('edds.photo@gmail.com', 'Edds Photo administracija');     // Add a recipient
    // $mail->addAddress('ellen@example.com');               // Name is optional
    $mail->addReplyTo($elPastas, 'Kliento el. paštas');
    $mail->addCC('cc@example.com');
    $mail->addBCC('bcc@example.com');

    //Attachments
    // $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = $klientoAntraste;
    $mail->Body    = $klientoTekstas;
    $mail->AltBody = $klientoTekstas;

    $mail->send();
    $zinute = "Jūsų laiškas sėkmingai išsiųstas. Dėkojame!";
    $_SESSION['zinutes'] = $zinute;
      print_r($globals);
      //createDoctor($elPastas)

    echo 'Message has been sent';
} catch (Exception $e) {
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
}
