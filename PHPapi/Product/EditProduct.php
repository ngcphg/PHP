<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE');
    header('Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Origin, Authorization');

    if(isset($_POST)){
        $conn = new mysqli("localhost","root","","resmandb");
        if($conn->connect_error){
            echo json_encode("Connect failed!".$conn->connect_error);
        }
        $sql="UPDATE `product` SET `Img`='".$_POST['Img']."',`ProductName`='".$_POST['ProductName']."',`Price`='".$_POST['Price']."',`ProductDesc`='".$_POST['ProductDesc']."' 
        WHERE `ProductID`='".$_POST['ProductID']."'";
        $result=$conn->query($sql);  
            echo json_encode("Edit ok!");
    }
?>