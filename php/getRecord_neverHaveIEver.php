<?php
    $servername = "rdbms.strato.de";
    $dbname = "dbs11985359";
    $username = "dbu2430013";
    $password = "B3NnY.2012._.";
    
    
    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        //echo "Connected successfully";
    } catch(PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }

    try {
        $stmt = $conn->prepare("SELECT * FROM neverHaveIEver ORDER BY rand() LIMIT 1");
        $stmt->execute();;
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // print_r($result);

        echo $result[0]['id'];
        echo ",";
        echo $result[0]['content'];

        $result = $conn->query("SELECT id FROM neverHaveIEver ORDER BY id DESC LIMIT 1;");
        $result = $result->fetchAll(PDO::FETCH_ASSOC);

        echo ",";
        echo $result[0]['id'];

        exit();


        //echo "\nInserted successfully";
    } catch(Exception $e) {
        echo "\nInsert failed: " . $e->getMessage();
    }
?>