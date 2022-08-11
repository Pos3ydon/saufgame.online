<?php
    session_start();

    $_SESSION["user"] = null;
    $_SESSION["root"] = false;

    header("Location: ./../../index.html");
    exit;
?>