<?php
    
?>

<!DOCTYPE html>
<html>
    
    <head>
        <link rel="icon" type="image/jpg" href="https://image.spreadshirtmedia.net/image-server/v1/mp/products/T1459A839PA4459PT28D15661520FS4058/views/1,width=378,height=378,appearanceId=839,backgroundColor=F2F2F2/icons-saufen.jpg"/>
        <title>Saufgame Admin</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" charset="utf-8" lang="de">
        <link rel="stylesheet" href="./css/register.css">
    </head>

    <body>
        <div id="loginWindow">
            <form id="loginForm" action="php/register.php" method="POST">
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