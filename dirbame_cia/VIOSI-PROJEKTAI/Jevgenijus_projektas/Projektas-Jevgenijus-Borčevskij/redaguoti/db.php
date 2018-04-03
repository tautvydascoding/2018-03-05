<?php
$conn = mysqli_connect('localhost', 'root', 'root', 'zoo_db');
if (!$conn) {
    die('Could not connect: ' . mysqli_error());
}
mysqli_set_charset($conn, 'utf8');
//mysqli_select_db('m_category', $conn);
