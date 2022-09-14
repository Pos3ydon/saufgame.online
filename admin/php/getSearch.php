<?php
    session_start();
        
    if (!isset($_SESSION["user"])) {
        header("Location: ./../../index.html");
        exit;
    }

    if ($_SESSION["root"] == false) {
        header("Location: ./../../index.html");
        exit();
    }

    $servername = "localhost";
    $dbname = "saufgame";
    $username = "root";
    $password = "";
    
    try {
      $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
      $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    //   echo "Connected successfully";
    } catch(PDOException $e) {
    //   echo "Connection failed: " . $e->getMessage();
    }

    try {
        $statement = $conn->prepare('SELECT * FROM ' . $_POST["table"] . ' WHERE content LIKE ? ');
        $statement->execute([("%" . $_POST["content"] . "%")]);
        $result = $statement->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode($result);

        //echo "\nInserted successfully";
    } catch(Exception $e) {
        echo "\nInsert failed: " . $e->getMessage();
    }
?>