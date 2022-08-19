<?php
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
        $statement = $conn->prepare("insert into neverHaveIEver (content) values ( ? )");
        $statement->execute([$_POST["content"]]);

        $stmt = $conn->prepare("delete from suggestion_neverHaveIEver where content = ? ");
        $stmt->execute([$_POST["content"]]);

        echo "ok";

        exit();


        //echo "\nInserted successfully";
    } catch(Exception $e) {
        echo "\nInsert failed: " . $e->getMessage();
    }
?>