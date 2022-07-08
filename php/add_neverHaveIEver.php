<?php
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
        $statement = $conn->prepare("select id from neverHaveIEver where question = ? ");
        $statement->execute([$_POST[$question]]);
        $result = $statement->fetchAll(PDO::FETCH_ASSOC);
        
        if (!isset($result[0])) {
            $statement = $conn->prepare("insert into neverHaveIEver (question) values ( ? )");
            $statement->execute([$_POST[$question]]);

            $id = $conn->lastInsertId();


            $statement = $conn->prepare("delete from suggestion_neverHaveIEver where id = ?");
            $statement->execute([$_POST[$suggestion_id]]);


            print("ok");



            die();
        }
        else {
            print($result[0]["id"]);
            die();
        }
        
        //echo "\nInserted successfully";
    } catch(Exception $e) {
        echo "\nInsert failed: " . $e->getMessage();
    }
?>