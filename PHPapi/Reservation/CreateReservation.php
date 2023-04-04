<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE');
    header('Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Origin, Authorization');

    const pi=2;
    if(isset($_POST)){
        $conn = new mysqli("localhost","root","","resmandb");
        if($conn->connect_error){
            echo json_encode("Connect failed!".$conn->connect_error);
        }
        $sql="SELECT * FROM `reservation` WHERE 1";
        $result=$conn->query($sql);
        $i=0;
        while($row=$result->fetch_assoc()){
            $i++;
        }
        $sql = "INSERT INTO `reservation`(`ByUser`, `name`, `email`, `phoneNumber`, `date`, `time`, `note`, `status`) 
        VALUES ('".$_POST['byUser']."', '".$_POST['name']."','".$_POST['email']."','".$_POST['phone']."','".$_POST['date']."','".$_POST['time']."','".$_POST['note']."','false')";
        $result=$conn->query($sql);
        echo json_encode("Add ok!");
    }
?>