<?php


$elPastas = $_POST['pastas'];
$klientoTema = $_POST['tema'];
$klientoKlausimas = $_POST['klausimas'];
$klientoVardas = $_POST['vardas'];
$klientoPavarde = $_POST['pavarde'];
$klienotNumeris = $_POST['numeris'];

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
    $mail->SMTPDebug = 0;                                 // Enable verbose debug output
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
    $mail->Subject = $klientoTema;
    $mail->Body    = "Siuntėjo vardas: " .$klientoVardas . " " . $klientoPavarde ."<br/>". "Tel.nr: " .$klienotNumeris ."<br/>". "Klausimas: ". $klientoKlausimas;
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    $zinute = "Sveikinu, jusu laiskas issiustas";
    $_SESSION['zinutes'] = $zinute;

    echo 'Žinutė išsiųsta';
} catch (Exception $e) {
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
}



require_once('functions.php');

 $vardas = $_GET['vardas'];
 $pavarde = $_GET['pavarde'];
 $pastas = $_GET['pastas'];
 $numeris = $_GET['numeris'];
 $tema = $_GET['tema'];
 $klausimas = $_GET['klausimas'];


 createUzklausa( $vardas, $pavarde, $pastas, $numeris, $tema, $klausimas);
 echo "Jusu zinute buvo isiusta!";

?>
