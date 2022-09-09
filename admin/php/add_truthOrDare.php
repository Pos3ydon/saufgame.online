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
        $content = explode("-", $_POST["content"]);
        $suggestion = trim($content[1]);
        $type = trim($content[0]);

        $statement = $conn->prepare("insert into truthOrDare (content, type) values ( ? , ? )");
        $statement->execute([$suggestion, $type]);

        $stmt = $conn->prepare("delete from suggestion_truthOrDare where content = ? ");
        $stmt->execute([$suggestion]);

        echo "ok";

        exit();


        //echo "\nInserted successfully";
    } catch(Exception $e) {
        echo "\nInsert failed: " . $e->getMessage();
    }
?>