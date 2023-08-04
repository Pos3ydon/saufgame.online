<?php
    $servername = "rdbms.strato.de";
    $dbname = "dbs11180804";
    $username = "dbu5587866";
    $password = "B3NnY.2012._.";
    
    
    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        //echo "Connected successfully";
    } catch(PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }

    try {
        $stmt = $conn->prepare("SELECT * FROM truthOrDare WHERE type = ? ORDER BY rand() LIMIT 1");
    $stmt->execute([$_POST["type"]]);
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if (!empty($result)) {
        $row = $result[0];
        $line = array_values($row); // Get only the values of the associative array
        echo implode(",", $line); // Join the values with a comma and echo the whole line
    } else {
        echo "No data found."; // Or handle the case when no data is found
    }

    $stmt = $conn->prepare("SELECT count(id) AS count FROM truthOrDare WHERE type = ? ");
    $stmt->execute([$_POST["type"]]);
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if (!empty($result)) {
        echo ",";
        echo $result[0]['count'];
    } else {
        echo ",0"; // Or handle the case when count is not available
    }

    exit();
Hier haben wir array_values($row) verwendet, um nur die Werte des assoziativen Arrays zu erhalten, und dann implode(",", $line) verwendet, um die Werte mit einem Beistrich zu verbinden und die gesamte Zeile auszugeben. Wenn keine Daten gefunden werden, wird eine entsprechende Nachricht ausgegeben, um damit umzugehen. Gleiches gilt für den Fall, wenn die Anzahl der Zeilen nicht verfügbar ist.








        //echo "\nInserted successfully";
    } catch(Exception $e) {
        echo "\nInsert failed: " . $e->getMessage();
    }
?>