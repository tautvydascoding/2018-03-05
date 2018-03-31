<?php


$elPastas = $_POST['pastas'];
$klientoAntraste = $_POST['antraste'];
$klientoKlausimas = $_POST['klausimas'];

// echo $elPastas. $klientoAntraste.$klientoKlausimas ;   //test


//Load Composer's autoloader
require 'libs/PHPMailer-master/PHPMailerAutoload.php';

$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try {
    //Server settings

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
    $mail->Username = 'aime.papuosalai@gmail.com';
    $mail->Password = 'dziumbambekeris321' ;  // SMTP username

    //Recipients
    $mail->setFrom('aime.papuosalai@gmail.com', 'Aimes papuosalai');
    $mail->addAddress('aime.papuosalai@gmail.com', 'Aimes papuosalai');     // Add a recipient
    $mail->addAddress('ellen@example.com');               // Name is optional
    $mail->addReplyTo( $elPastas, 'Kliento vardas');
    // $mail->addCC('cc@example.com');
    // $mail->addBCC('bcc@example.com');

    //Attachments
    // $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = $klientoAntraste;
    $mail->Body    = $klientoKlausimas;
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    $zinute = "Sveikinu, jusu laiskas issiustas";
    $_SESSION['zinutes'] = $zinute;

    echo 'Message has been sent';
} catch (Exception $e) {
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
}

 ?>
