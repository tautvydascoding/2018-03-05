<?php
require("db.php");
$id = $_REQUEST['id'];

$result = mysqli_query($conn, "SELECT * FROM `straipsniai` WHERE id=$id");
$test = mysqli_fetch_array($result);
if (!$result) {
    die("Error: Data not found.");
}

$turinys = $test['turinys'];

if (isset($_POST['save'])) {
	$turinys_save = $_POST['turinys'];

	mysqli_query($conn, "UPDATE `straipsniai` SET turinys='$turinys_save' WHERE id=$id");
	//echo "Saved!";

	header("Location: index.php");
}
mysqli_close($conn);
?>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Redagavimas</title>
</head>
<body>
<form method="post">
    <table>
        <tr>
            <td>Pavadinimas:</td>
            <td><input type="text" name="turinys" value="<?php echo $turinys ?>" size='30' /></td>
            <td><input type="submit" name="save" value="Išsaugoti" /></td>
        </tr>
    </table>
</form>
</body>
</html>
