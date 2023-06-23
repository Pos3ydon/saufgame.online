<?php

    session_start();
        
    if (!isset($_SESSION["user"])) {
        header("Location: ./../../index.html");
        exit;
    }

    $servername = "rdbms.strato.de";
    $dbname = "dbs11180804";
    $username = "dbu5587866";
    $password = "B3NnY.2012._.";
    
    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        //echo "Connected successfully";
    } catch(PDOException $e) {
    //   echo "Connection failed: " . $e->getMessage();
    }
    
    try {
        $statement = $conn->prepare("select * from " . $_POST["table"]);
        $statement->execute();
        $result = $statement->fetchAll(PDO::FETCH_ASSOC);

        //print_r($result);

        echo json_encode($result);

        exit();


        //echo "\nInserted successfully";
    } catch(Exception $e) {
        echo "\nInsert failed: " . $e->getMessage();
    }
?>