window.onload = function() {
    var button = document.createElement('button');
    button.type = 'button';
    button.innerHTML = 'Press me';
    button.className = 'btn-styled';
    button.id = "idk";
    var container = document.getElementById('sidebar');
    container.appendChild(button);
}



window.addEventListener("load", function() {

    // Überprüft ob die id auf dem Window existiert
    if (document.getElementById("idk") || document.getElementById("idk2")) {
        
        //Fügt zu dem Button das Click Event Hinzu
        document.getElementById("idk").addEventListener("click", clicked);
    }
   });
   
   //Test Funktion
   function clicked() {
    alert('Test!');
   }
