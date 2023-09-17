<?php
session_start();
$database='localhost';
$database_email='root';
$database_password='';
$database_name='log in';
$conn=mysqli_connect($database,$database_email,$database_password,$database_name);
if(mysqli_connect_error()){
	exit("failed to connect to the database:" -mysqli_connect_error());
?>