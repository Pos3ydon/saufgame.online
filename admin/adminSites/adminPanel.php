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
        echo "Connection failed: " . $e->getMessage();
    }

    try {
        $statement = $conn->prepare("select * from users where username = ? ");
        $statement->execute([$_POST["username"]]);
        $result = $statement->fetchAll(PDO::FETCH_ASSOC);

        if (!isset($result[0])) {
            echo "Benutzer nicht gefunden";
            exit();
        }
        
        if (!password_verify($_POST["password"], $result[0]["password"])) {
            echo "Falsches Password";
            exit();
        }
        
        $_SESSION["user"] = $result[0]["username"];
        $_SESSION["perms"] = $result[0]["permissions"];

        //echo "\nInserted successfully";
    } catch(Exception $e) {
        echo "\nInsert failed: " . $e->getMessage();
    }
?>


<!DOCTYPE html>
<html>
    
    <head>
        <link rel="icon" type="image/jpg" href="./../../images/logo.png"/>
        <title>Saufgame Admin</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" charset="utf-8" lang="de">

        <link rel="stylesheet" href="./../css/adminPanel.css">
    </head>

    <body>
    <div id="btn_openSidebar"></div>
    <div id="sidebar" data-active="0">
        <div id="profileDiv">
            <p><?php echo $_SESSION["user"];?></p>
        </div>
        <div id="sidebarButtons">
            <?php
                if ($_SESSION["perms"]) {
            ?>
                    <div class="sidebarButton" onclick="$('#content').load('rootPanel.php');"><p>Root Panel</p></div>
            <?php
                }
            ?>
        </div>
        <div id="logoutButton" class="sidebarButton"><p>Logout</p></div>
    </div>
    <div id="content"></div>
    </body>

    <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.0.js"></script>
    <script type="text/javascript" src="./../js/adminPanel.js"></script>
</html>