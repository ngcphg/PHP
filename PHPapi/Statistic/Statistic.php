<?php

use Nette\Utils\ArrayList;

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE');
    header('Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Origin, Authorization');

    if(isset($_GET)){
        $conn = new mysqli("localhost","root","","resmandb");
        if($conn->connect_error){
            echo json_encode("Connect failed!".$conn->connect_error);
        }
        $sql= "SELECT bill.BillNumber, product.ProductName, bill.Quantity, bill.Price, bill.Date FROM `bill` , `product`
        WHERE bill.date BETWEEN '".$_GET['from']."' and '".$_GET['to']."' AND bill.ProductID = product.ProductID";
        $result = $conn->query($sql);
        $list = array();
        while ($row = $result->fetch_assoc()) {
            $list[] = $row;
        }  
        echo json_encode($list);
    }
?>