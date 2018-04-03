<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Straipsniu redagavimas</title>
</head>
<body>
<form method="post" action="add.php">
    <table>
        <tr>
            <td>Kurti/Redaguoti:</td>
            <td><input type="text" name="turinys" size="100" /></td>
            <td><input type="submit" name="submit" value="Kurti/Redaguoti" /></td>
        </tr>
    </table>
</form>
<br/>
<table border="1">
<?php
include("db.php");
$result = mysqli_query($conn, "SELECT * FROM `straipsniai`");
if (!$result) {
    die("Error: Data not found.");
}
while($test = mysqli_fetch_array($result)) {
    $id = $test['id'];
    echo '<tr>';
    echo '<td>' . $test['turinys'] . '</td>';
    echo '<td> <a href="edit.php?id=' . $id . '">Redaguoti</a></td>';
    echo '<td> <a href="delete.php?id=' . $id . '">Trinti</a></td>';
    echo '</tr>';
}
mysqli_close($conn);
?>
</table>
</body>
</html>
