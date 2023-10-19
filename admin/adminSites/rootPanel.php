<?php

    session_start();
 
    
?>

<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" charset="utf-8" lang="de">
        <link rel="stylesheet" href="./../css/register.css">
        <link rel="stylesheet" href="./../css/registerMobile.css">
    </head>

    <body>
        <div id="loginWindow">
            <form id="loginForm" action="./../php/register.php" method="POST">
                <div id="loginDivPassword" class="loginDiv">
                    <input placeholder="Benutzername" id="inputName" class="input" type="text" name="username">
                </div>
                <div id="loginDivEmail" class="loginDiv">
                    <input placeholder="E-Mail" id="inputEmail" class="input" type="email" name="email">
                </div>
                <div id="loginDivPassword" class="loginDiv">
                    <input placeholder="Password" id="inputPassword" class="input" type="password" name="password">
                </div>
                <input id="loginSubmit" type="submit">
            </form>
        </div>
    </body>

</html>