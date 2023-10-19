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
        <link rel="stylesheet" href="./../css/addSuggestionMobile.css">
    </head>

    <body>
        <div id="selectGameDiv">
            <select id="selectGame" name="game">
                <option class="gameOption">Select Game</option>
            </select>
            <div id="selectGameDiv2"></div>
            <input id="suggestionText" class="suggestionInput" type="text" placeholder="Write Here your Suggestion ..."></input>
            <button id="submitQuestion">Submit</button>
        </div>
    </body>

    <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.0.js"></script>
    <script type="text/javascript" src="./../js/sendInSuggestion.js"></script>
</html>