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
      
    //   echo "Connected successfully";
    } catch(PDOException $e) {
    //   echo "Connection failed: " . $e->getMessage();
    }

    try {
        if (stripos($_POST["suggestion"], ";") !== false) {
            $contents = trim($_POST["suggestion"], " ;");
            $contents = explode(";", $contents);
            
            foreach ($contents as $content) {
                $statement = $conn->prepare("select id from suggestion_neverHaveIEver where content = ? ");
                $statement->execute([trim($content)]);
                $result = $statement->fetchAll(PDO::FETCH_ASSOC);
                
                if (!isset($result[0])) {
                    $statement = $conn->prepare("select id from neverHaveIEver where content = ? ");
                    $statement->execute([trim($content)]);
                    $result = $statement->fetchAll(PDO::FETCH_ASSOC);
                    
                    if (!isset($result[0])) {
                        $statement = $conn->prepare("insert into suggestion_neverHaveIEver (content) values ( ? )");
                        $statement->execute([trim($content)]);


                        
                        echo "ok";
                    }
                    else {
                        print($result[0]["id"]);
                    }
                }
                else {
                    print($result[0]["id"]);
                }
            }
        }
        else {
            $statement = $conn->prepare("select id from suggestion_neverHaveIEver where content = ? ");
            $statement->execute([trim($_POST["suggestion"])]);
            $result = $statement->fetchAll(PDO::FETCH_ASSOC);
            
            if (!isset($result[0])) {
                $statement = $conn->prepare("select id from neverHaveIEver where content = ? ");
                $statement->execute([trim($_POST["suggestion"])]);
                $result = $statement->fetchAll(PDO::FETCH_ASSOC);
                
                if (!isset($result[0])) {
                    $statement = $conn->prepare("insert into suggestion_neverHaveIEver (content) values ( ? )");
                    $statement->execute([trim($_POST["suggestion"])]);

                    echo "ok";
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
        }
        
        //echo "\nInserted successfully";
    } catch(Exception $e) {
        echo "\nInsert failed: " . $e->getMessage();
    }
?>