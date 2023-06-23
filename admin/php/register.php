<?php
    session_start();
        
    

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
        $statement = $conn->prepare("select id from users where username = ? ");
        $statement->execute([$_POST["username"]]);
        $result = $statement->fetchAll(PDO::FETCH_ASSOC);
        
        if (!isset($result[0])) {

            $password = password_hash($_POST["password"], PASSWORD_DEFAULT);


            $statement = $conn->prepare("insert into users (username, email, password) values ( ? , ? , ? );");
            $statement->execute([$_POST["username"], $_POST["email"], $password]);
        
            echo "User erfolgreich erstellt";
            exit();

        }
        else {
            echo "User existiert bereits";
            exit();
        }

        //echo "\nInserted successfully";
    } catch(Exception $e) {
        //echo "\nInsert failed: " . $e->getMessage();
    }
?>