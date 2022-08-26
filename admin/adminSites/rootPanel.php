<?php

    session_start();
 
    if (!isset($_SESSION["user"])) {
        header("Location: ./../../index.html");
        exit;
    }

    if ($_SESSION["root"] == false) {
        header("Location: ./../../index.html");
        exit();
    }
?>

<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" charset="utf-8" lang="de">

    </head>

    <body>
        <div id="loginWindow">
            <form id="loginForm" action="./../php/register.php" method="POST">
                <div id="loginDivPassword" class="loginDiv">
                    <label>Benutzername</label> 
                    <input id="inputName" class="input" type="text" name="username">
                </div>
                <div id="loginDivEmail" class="loginDiv">
                    <label>Email</label>
                    <input id="inputEmail" class="input" type="email" name="email">
                </div>
                <div id="loginDivPassword" class="loginDiv">
                    <label>Password</label> 
                    <input id="inputPassword" class="input" type="password" name="password">
                </div>
                <input id="loginSubmit" type="submit">
            </form>
        </div>
    </body>

</html>