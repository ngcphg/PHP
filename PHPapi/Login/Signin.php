<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE');
    header('Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Origin, Authorization');

    if(isset($_POST)){
        $conn = new mysqli("localhost","root","","resmandb");
        if($conn->connect_error){
            echo json_encode("Connect failed!".$conn->connect_error);
        }
        $sql="SELECT * FROM `account` WHERE username = '".$_POST['user']."' and password = '".$_POST['pass']."'";
        $result=$conn->query($sql);
        //Login code
        if ($row=$result->fetch_assoc()){    
            echo json_encode($row['authority']);
        }else{
            echo json_encode("Login failed!");
        }
    }
?>