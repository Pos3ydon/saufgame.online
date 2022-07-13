<!DOCTYPE html>
<html>
    <head>
        <title>Saufgame</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" charset="utf-8" lang="de">
        <link rel="stylesheet" href="../css/neverHaveIEverStyle.css">
    </head>
    <body>
        <div id="sidebar">
            <div id="buttons_auto_apperance"></div>
        </div>
        <div id="content"></div>
    </body>

    <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.0.js"></script>
    <!-- <script type="text/javascript" src="../js/default_site.js"></script> -->
    <script type="text/javascript" src="../js/nHIE_create_Buttons.js"></script>
    <script>
        var GET = <?php echo json_encode($_GET); ?>;
        console.log(GET);
    </script>
</html>