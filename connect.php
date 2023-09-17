<?php
$fname = $_POST['fname'];
$lname= $_POST['lname'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$password = $_POST['password'];
$sex = $_POST['sex'];
$hospital = $_POST['hospital'];
$identification = $_POST['identification'];
$vaccinationdose = $_POST['vacinationdose'];
$nameofdistrict = $_POST['nameofdistrict'];
$conn =  new mysqli_connect("localhost','root','signup');
if ($conn->connect_error)
{
	die('connection failed :'.$conn->connect_error);
}else{
	$stmt - $conn->prepare"(insert into signup(firstName,lastName,sex,hospital,,email,phone,password,identification,vacinationdose,nameofdistrict)"
	values($fname,$lname,$sex,$hospital,$email,$phone,$password,$identification,$vaccinationdose,$nameofdistrict);
	$stmt->bind_param("sssssi",$fname,$lname,$sex,$hospital,$email,$phone,$password,$identification,$vaccinationdose,$nameofdistrict);
	$stmt->execute();
	echo "sign up successfully....";
	$stmt->close();
	$conn->close();
?>