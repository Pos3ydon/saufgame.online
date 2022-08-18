<!DOCTYPE html>
<html>
    <head>
        <title>Saufgame</title>
        <link rel="icon" type="image/jpg" href="./../images/icon.png"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" charset="utf-8" lang="de">
        <link rel="stylesheet" href="./../css/defaultSiteStyle.css">
    </head>
    <body>
        <div id='all-main'>
            <div id="btn_openSidebar"></div>
            <div id="sidebar">
                <div id="sidebarLogo" class="sidebarButton" onclick="window.location.href = './../index.html'"><p>Home</p></div>
                <div id="buttons_auto_apperance"></div>
                <div id="management_buttons">
                    <!-- <div id="btn_suggestion" class="sidebarButton" onclick="window.location.href = './sendInSuggestion.html'"><p>Send in Suggestion</p></div> -->
                    <div id="btn_suggestion" class="sidebarButton" onclick="loadPage('./sendInSuggestion.html', this)" disabled><p>Send in Suggestion</p></div>
                    <div id="btn_login" class="sidebarButton" onclick="loadPage('./login.html', this)"><p>Login</p></div>
                </div>
            </div>
            <div id="content"></div>
        </div>
        
        <!------Footer------>
        <div id="loadFooter">
        </div>
    </body>

    <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.0.js"></script>
    <script type="text/javascript" src="../js/default_site.js"></script>
    <script>
        var GET = <?php echo json_encode($_GET); ?>;
    </script>
</html>