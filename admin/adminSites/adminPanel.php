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

        if (!isset($_SESSION["user"])) {

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
                $_SESSION["user_permissions"] = $result[0]["permissions"];
            
        }

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
        <div id="sidebar">
            <div id="profileDiv">
                <p><?php echo $_SESSION["user"];?></p>
                <p><?php echo $_SESSION['user_permissions'];?></p>
            </div>
            <div id="sidebarButtons">
                <?php
                    
                    if (isset($_SESSION['user_permissions']) && in_array('root', $_SESSION['user_permissions'])) {
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
    <script>
        var GET = <?php echo json_encode($_GET); ?>;
    </script>
</html>