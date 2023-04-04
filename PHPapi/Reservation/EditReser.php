<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE');
    header('Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Origin, Authorization');

    if(isset($_POST)){
        $conn = new mysqli("localhost","root","","resmandb");
        if($conn->connect_error){
            echo json_encode("Connect failed!".$conn->connect_error);
        }
        $sql="UPDATE `reservation` SET `name`='".$_POST['name']."',`email`='".$_POST['email']."',`phoneNumber`='".$_POST['phoneNumber']."',`date`='".$_POST['date']."',
        `time`='".$_POST['time']."',`note`='".$_POST['note']."'
        WHERE resID = '".$_GET['resID']."'";
        $result=$conn->query($sql);  
            echo json_encode("Edit ok!");
    }
?>