<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Origin, Authorization');


if(isset($_POST)){
    $host = "localhost";
    $username = "root";
    $password = "";
    $dbname = "resmandb" ;
    $conn= new mysqli($host, $username, $password, $dbname);
    if($conn ->connect_error)
    {
        echo json_encode("Connect Failed!!" . $conn->connect_error);
    }
    $id=$_POST['id'];
    $user=$_POST['user'];
    $pass=$_POST['pass'];
    $author=$_POST['author'];
    $result=$conn->query("INSERT INTO `account`(`id`, `username`, `password`, `authority`) VALUES ('$id','$user','$pass','1')");
    echo json_encode("add ok!");
}
?>