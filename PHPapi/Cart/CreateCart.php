<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE');
    header('Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Origin, Authorization');

    if(isset($_POST)){
        $conn = new mysqli("localhost","root","","resmandb");
        if($conn->connect_error){
            echo json_encode("Connect failed!".$conn->connect_error);
        }
        date_default_timezone_set('Asia/Ho_Chi_Minh');
        $sql="INSERT INTO `cart`(`TableNo`, `ProductID`, `Quantity`, `Price`, `Time`) 
        VALUES ('".$_POST['TableNo']."','".$_POST['ProductID']."','".$_POST['Quantity']."','".$_POST['Price']."','".date("H:i:s")."')";
        $result=$conn->query($sql);  
            echo json_encode("Order ok!");
    }
?>