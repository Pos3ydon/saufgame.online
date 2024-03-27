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
        <link rel="stylesheet" href="./../css/searchInDB.css">
    </head>

    <body>
        <div class="main">
            <div id="search__wrapper" data-wrap-width="xsmall">
                <select id="selectGame">
                    <option class="gameOption">Select Game</option>
                </select>
                <input id="searchBar"/>
                <button id="searchButton">Search</button>
            </div>
            <div id="resultsScrollDiv" data-wrap-width="large"></div>
        </div>
    </body>

    <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.0.js"></script>
    <script type="text/javascript" src="./../js/searchInDB.js"></script>
</html>