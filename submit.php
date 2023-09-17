<?php
$fname = $_POST['first name'];
$lname= $_POST['last name'];
$age = $_POST['age'];
$date = $_POST['DOB'];
$gender = $_POST['sex'];
$hospital = $_POST['hospital'];
$province = $_POST['province'];
$select = $_POST['select'];
$conn =  new mysqli_connect("localhost','root','submission');
if ($conn->connect_error)
{
	die('connection failed :'.$conn->connect_error);
}else{
	$stmt - $conn->prepare("insert into signup(firstName,lastName,gender,hospital,,age,date,province,select)
	values($fname,$lname,$sex,$hospital,$age,$date,$province,$select)");
	$stmt->bind_param("sssssi",$fname,$lname,$sex,$hospital,$age,$date,$province,$select);
	$stmt->execute();
	echo "submit successfully....";
	$stmt->close();
	$conn->close();
?>