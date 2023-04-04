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
        $sql="INSERT INTO `bill` (`BillNumber`, `ProductID`, `Quantity`, `Price`, `Date`) 
              VALUES ('".$_POST['BillNumber']."', (SELECT `ProductID` from `product` where `ProductName` = '".$_POST['ProductName']."'),
              '".$_POST['Quantity']."','".$_POST['Price']."','".date("Y-m-d")."')";
        $result=$conn->query($sql);   
    }
    echo json_encode("Add ok!");
?>