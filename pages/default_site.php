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
            <div id="sidebar">
                <div id="sidebarLogo" onclick="window.location.href = './../index.html'"></div>
                <div id="buttons_auto_apperance"></div>
            </div>
            <div id="content"></div>
        </div>
        
        <!------Footer------>
        <div id="loadFooter">
            <!-- <footer id="footer"> -->
                <!-- <div id="footer-container">
                    <div id="top-footer">
                        <a>LETS MAKE SOME FUN BOYZ...</a>
                    </div>
                    <div id="mid-footer">
                        <div id="beschreibung">
                            <a id="description-split">BESCHREIBUNG</a>
                            <div id="footer-line"></div>
                            <a id="beschreibunt_text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lobortis feugiat nulla, non interdum enim ullamcorper sit amet.
                        </div>
                        <div id="nuetzliche-links">
                            <a id="link-split">NÜTZLICHE LINKS</a>
                            <div id="footer-line"></div>
                            <a id="links_text">Hilfe</a>
                            <a id="links_text">Dein Account</a>
                            <a id="links_text">Privacy Policy</a>
                        </div>
                        <div id="kontakte">
                            <a id="contakt-split">KONTAKTE</a>
                            <div id="footer-line"></div>
                            <a id="kontakte_text">joel.fischnaller@gmail.com</a>
                        </div>
                    </div>
                    <div id="copyright">
                        <a id="copyright_text">@2022 Copyright. Saufgame.online</a>
                    </div>
                </div> -->
            <!-- </footer> --> -->
        </div>
    </body>

    <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.0.js"></script>
    <script type="text/javascript" src="../js/default_site.js"></script>
    <script>
        var GET = <?php echo json_encode($_GET); ?>;
    </script>
</html>