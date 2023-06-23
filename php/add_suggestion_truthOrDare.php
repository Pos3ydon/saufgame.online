<?php
    die;

    $servername = "rdbms.strato.de";
    $dbname = "dbs11180804";
    $username = "dbu5587866";
    $password = "B3NnY.2012._.";
    
    
    try {
      $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
      $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      
    //   echo "Connected successfully";
    } catch(PDOException $e) {
    //   echo "Connection failed: " . $e->getMessage();
    }

    try {

        $statement = $conn->prepare("select id from suggestion_truthOrDare where content = ? ");
        $statement->execute([$_POST["suggestion"]]);
        $result = $statement->fetchAll(PDO::FETCH_ASSOC);
        
        if (!isset($result[0])) {
            $statement = $conn->prepare("select id from truthOrDare where content = ? ");
            $statement->execute([$_POST["suggestion"]]);
            $result = $statement->fetchAll(PDO::FETCH_ASSOC);
            
            if (!isset($result[0])) {
                $statement = $conn->prepare("insert into suggestion_truthOrDare (content, type) values ( ? , ? )");
                $statement->execute([$_POST["suggestion"], $_POST["type"]]);

                

                //$id = $conn->lastInsertId();


                print("ok");



                die();
            }
            else {
                print($result[0]["id"]);
                die();
            }
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