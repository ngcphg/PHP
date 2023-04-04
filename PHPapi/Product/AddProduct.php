<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE');
    header('Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Origin, Authorization');

    if(isset($_POST)){
        $conn = new mysqli("localhost","root","","resmandb");
        if($conn->connect_error){
            echo json_encode("Connect failed!".$conn->connect_error);
        }
        $sql="INSERT INTO `product`(`ProductName`, `Price`, `ProductDesc`, `Img`) 
        VALUES ('".$_POST['ProductName']."','".$_POST['Price']."','".$_POST['ProductDesc']."', '".$_POST['Img']."')";
        $result=$conn->query($sql);  
            echo json_encode("Add ok!");
    }
?>