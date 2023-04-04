<?php

use Nette\Utils\ArrayList;

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE');
    header('Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Origin, Authorization');

    if(isset($_POST)){
        $conn = new mysqli("localhost","root","","resmandb");
        if($conn->connect_error){
            echo json_encode("Connect failed!".$conn->connect_error);
        }
        $sql= "SELECT * FROM `product`";
        $result = $conn->query($sql);
        $list = array();
        while ($row = $result->fetch_assoc()) {
            $list[] = $row;
        }  
        mysqli_close($conn);
        echo json_encode($list);
    }
?>