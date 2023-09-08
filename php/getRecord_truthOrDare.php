<?php
    $servername = "rdbms.strato.de";
    $dbname = "dbs11180804";
    $username = "dbu5587866";
    $password = "B3NnY.2012._.";
    
    
    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        //echo "Connected successfully";
    } catch(PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }

    try {
        $stmt = $conn->prepare("SELECT * FROM truthOrDare WHERE type = ? ORDER BY rand() LIMIT 1");
        $stmt->execute([$_POST["type"]]);
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // print_r($result);

        echo $result[0]['id'];
        echo ":";
        echo $result[0]['content'];

        $stmt = $conn->prepare("SELECT count(id) AS count FROM truthOrDare WHERE type = ? ");
        $stmt->execute([$_POST["type"]]);
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

        echo ":";
        echo $result[0]['count'];

        exit();


        //echo "\nInserted successfully";
    } catch(Exception $e) {
        echo "\nInsert failed: " . $e->getMessage();
    }
?>