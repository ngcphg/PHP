<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE');
    header('Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Origin, Authorization');

    if(isset($_GET)){
        $conn = new mysqli("localhost","root","","resmandb");
        if($conn->connect_error){
            echo json_encode("Connect failed!".$conn->connect_error);
        }
        $sql="DELETE FROM `cart` 
        WHERE `TableNo` = '".$_GET['TableNo']."' 
        AND `ProductID` = (SELECT `ProductID` FROM `product` WHERE `ProductName` = '".$_GET['ProductName']."');";
        $result=$conn->query($sql);  
            echo('Delete OK!');
    }
?>