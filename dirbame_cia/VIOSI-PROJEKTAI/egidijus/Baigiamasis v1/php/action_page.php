<?php

include("prisijungimas.php");

$id = $_POST['id'];
$name = $_POST['name'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$sql = "INSERT INTO contacts ('', $name, $lastname, $phone, $email, $message)
VALUES ('John', 'Doe', 'john@example.com')";

if (mysqli_query($connection, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
?>