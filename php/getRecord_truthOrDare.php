<?php
$servername = "rdbms.strato.de";
$dbname = "dbs11180804";
$username = "dbu5587866";
$password = "B3NnY.2012._.";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    //echo "Connected successfully";
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}

try {
    $stmt = $conn->prepare("SELECT * FROM truthOrDare WHERE type = ? ORDER BY rand() LIMIT 1");
    $stmt->execute([$_POST["type"]]);
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // print_r($result);

    echo $result[0]['id'];
    echo "§";

    // Überprüfen, ob der Text ein Komma enthält
    $content = $result[0]['content'];
    if (strpos($content, ',') !== false) {
        // Wenn ein Komma gefunden wird, teilen wir den Text und geben den Teil nach dem Komma aus
        $parts = explode(',', $content);
        $vorKomma = $parts[0];
        $nachKomma = $parts[1];
        
        // Kombinieren der Teile zu einem Satz
        $satz = $vorKomma . ", " . $nachKomma;
        
        echo $satz;
    } else {
        // Wenn kein Komma gefunden wird, geben wir den ursprünglichen Text aus
        echo $content;
    }

    // $stmt = $conn->prepare("SELECT count(id) AS count FROM truthOrDare WHERE type = ? ");
    // $stmt->execute([$_POST["type"]]);
    // $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // echo ",";
    // echo $result[0]['count'];

    exit();

    //echo "\nInserted successfully";
} catch (Exception $e) {
    echo "\nInsert failed: " . $e->getMessage();
}
?>
