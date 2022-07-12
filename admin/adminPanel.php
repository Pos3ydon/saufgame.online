<?php
    session_start();


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
        
        $statement = $conn->prepare("select * from users where username = ? ");
        $statement->execute([$_POST["username"]]);             //<-- ERROR ON THIS LINE IDK WHY...
        $result = $statement->fetchAll(PDO::FETCH_ASSOC);

        if (!isset($result[0])) {
            echo "Benutzer nicht gefunden";
            exit();
        }

        if (!password_verify($_POST["password"], $result[0]["password"])) {
            echo "Falsches Password";
            exit();
        }

        if ($result[0]["username"] == "root") {
            $_SESSION["root"] = true;
            header("Location: rootPanel.php"); 
            exit();
        }
        else {
            $_SESSION["root"] = false;
        }

        //echo "\nInserted successfully";
    } catch(Exception $e) {
        echo "\nInsert failed: " . $e->getMessage();
    }
?>


<!DOCTYPE html>
<html>
    
    <head>
        <link rel="icon" type="image/jpg" href="https://image.spreadshirtmedia.net/image-server/v1/mp/products/T1459A839PA4459PT28D15661520FS4058/views/1,width=378,height=378,appearanceId=839,backgroundColor=F2F2F2/icons-saufen.jpg"/>
        <title>Saufgame Admin</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" charset="utf-8" lang="de">

        <link rel="stylesheet" href="css/adminPanel.css">
    </head>

    <body>
        <div id="sidebar"></div>
        <div id="suggestionScrollDiv">
            <?php
                $statement = $conn->prepare("select * from suggestion_neverHaveIEver");
                $statement->execute();
                $result = $statement->fetchAll(PDO::FETCH_ASSOC);

                foreach ($result as $suggestion) {
            ?>
                <div class="suggestion">
                    <p class="suggestionText"><?php echo $suggestion["suggestion"]; ?></p>
                    <button class="btn_yes"></button>
                    <button class="btn_no"></button>
                </div>
            <?php
                }
            ?>
        </div>
    </body>

    <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.0.js"></script>
    <script type="text/javascript" src="js/adminPanel.js"></script>
</html>