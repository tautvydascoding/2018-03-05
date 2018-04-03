<?php
if(isset($_POST['submit'])){
	include 'db.php';
	if (isset($_POST['turinys'])) {
		$turinys = mysqli_real_escape_string($conn, $_POST['turinys']);
		mysqli_query($conn, "INSERT INTO `straipsniai`(turinys) VALUES ('$turinys')");
	}
}

header("Location: index.php");
