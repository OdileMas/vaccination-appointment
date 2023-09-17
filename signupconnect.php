<?php
require("connect.php");
$fname = $_POST['fname'];
$lname= $_POST['lname'];
$email= $_POST['email'];
$phone= $_POST['phone'];
$dob= $_POST['DOB'];
$sex= $_POST['sex'];
$hospital= $_POST['hospital'];
$identification= $_POST['identification'];
$vaccinationdose= $_POST['vacinationdose'];
$nameofdistrict= $_POST['nameofdistrict'];
$categories= $_POST['categories'];
$password= $_POST['password'];
if (isset($_POST['signup'])) {
    if($categories === 'member'){

    $sgl = "INSERT INTO member(name,name,Phone_number,hospital,Date_of_birth,nameofdistrict,sex,Email,password) values('$fname','$lname','$phone','$home','$hospital','$district','$identification','$sex','$email','$password')";
    $result = mysqli_query($connect,$sgl);
    header("location:childdashboard.html");
    }
    else {
        $sgl = "INSERT INTO manager(name,name,Phone_number,identification,Date_of_birth,Name_of_hospital,identification,sex,Email) values('$fname','$lname','$phone','$identification','$dob','$hospital','$identification','$sex','$email')";
        $result = mysqli_query($connect,$sgl);
        header("location:recordmanager.dashboard.html");
    
    }
}
?>