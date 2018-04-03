<?php
include("db.php");

$id = $_REQUEST['id'];

// sending query
mysqli_query($conn, "DELETE FROM straipsniai WHERE id=$id");

header("Location: index.php");
