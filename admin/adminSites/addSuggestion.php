<?php

    session_start();
        
    if (!isset($_SESSION["user"])) {
        header("Location: ./../../index.html");
        exit;
    }
?>

<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" charset="utf-8" lang="de">

        <link rel="stylesheet" href="./../css/addSuggestion.css">
    </head>

    <body>
        <div id="selectGameDiv">
            <select id="selectGame" name="game">
                <option class="gameOption">Select Game</option>
            </select>
        </div>

        <textarea id="questionInput"></textarea>
        <button id="submitQuestion">Submit</button>
    </body>

    <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.0.js"></script>
    <script type="text/javascript" src="./../js/addSuggestion.js"></script>
</html>