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
                if (str_contains($_POST["suggestion"], ";")) {
                    $contents = explode(";", $_POST["suggestion"]);
                    $sql = "insert into suggestion_truthOrDare (content, type) values ";

                    foreach ($contents as $content) {
                        $sql .= ("('" . trim($content) . "', '" . $_POST["type"] . "'), ");
                    }

                    $conn->query(trim($sql, ", "));
                }
                else {
                    $statement = $conn->prepare("insert into suggestion_truthOrDare (content, type) values ( ? , ? )");
                    $statement->execute([$_POST["suggestion"], $_POST["type"]]);
                }

                

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