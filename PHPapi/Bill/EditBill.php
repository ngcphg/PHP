<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE');
    header('Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Origin, Authorization');

    if(isset($_POST)){
        $conn = new mysqli("localhost","root","","resmandb");
        if($conn->connect_error){
            echo json_encode("Connect failed!".$conn->connect_error);
        }
        $sql="UPDATE `bill` SET `ProductID`= (SELECT `ProductID` from `product` where `ProductName` = '".$_POST['ProductName']."'), 
        `Quantity`='".$_POST['Quantity']."',`Price`='".$_POST['Price']."' 
        WHERE `BillNumber`='".$_POST['BillNumber']."'";
        $result=$conn->query($sql);  
            echo json_encode("Edit ok!");
    }
?>