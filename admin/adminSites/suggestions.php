<!DOCTYPE html>
<html>
    
    <head>
        <link rel="icon" type="image/jpg" href="https://image.spreadshirtmedia.net/image-server/v1/mp/products/T1459A839PA4459PT28D15661520FS4058/views/1,width=378,height=378,appearanceId=839,backgroundColor=F2F2F2/icons-saufen.jpg"/>
        <title>Saufgame Admin</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" charset="utf-8" lang="de">

        <link rel="stylesheet" href="css/suggestions.css">
    </head>

    <body>
        <div id="suggestionScrollDiv">
            <?php
                $statement = $conn->prepare("select * from suggestion_neverHaveIEver");
                $statement->execute();
                $result = $statement->fetchAll(PDO::FETCH_ASSOC);

                foreach ($result as $suggestion) {
            ?>
                <div class="suggestion">
                    <p class="suggestionText"><?php echo $suggestion["suggestion"]; ?></p>
                    <button class="btn_yes"></button>
                    <button class="btn_no"></button>
                </div>
            <?php
                }
            ?>
        </div>
    </body>

    <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.0.js"></script>
    <script type="text/javascript" src="./../js/suggestion.js"></script>
</html>