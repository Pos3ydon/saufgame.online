<?php

    session_start();
        
    if (!isset($_SESSION["user"])) {
        header("Location: ./../../index.html");
        exit;
    }

    $servername = "localhost";
    $dbname = "saufgame";
    $username = "root";
    $password = "";
    
    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        //echo "Connected successfully";
    } catch(PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }

    try {
        $statement = $conn->prepare("INSERT INTO neverHaveIEver (content) VALUES ( ? )");
        $statement->execute([$_POST["content"]]);

        $stmt = $conn->prepare("DELETE FROM suggestion_neverHaveIEver WHERE content = ? ");
        $stmt->execute([$_POST["toRemove"]]);

        echo "ok";

        exit();


        //echo "\nInserted successfully";
    } catch(Exception $e) {
        echo "\nInsert failed: " . $e->getMessage();
    }
?>