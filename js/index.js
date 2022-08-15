var path = './pages/default_site.php';

window.onload = function() {

    $("#loadFooter").load("../pages/footer.html");

    $.getJSON('./json/gamelist.json', function(json) {

        var margin = 10;
        var gameCount = Object.keys(json).length;

        margin = (100 - (gameCount * 20)) / (gameCount + 1);
    
        if (margin < 10) margin = 10;
        
        $.each( json, function( game, data ) {
            console.log(game);

            var child = document.createElement('div');
            child.innerHTML = '<b>' + data.name + '</b>';
            child.className = 'gameButton btns';
            child.style.marginLeft = margin + "%";


            child.onclick = function() {
                window.sessionStorage.setItem("page", game + ".html");
                window.location.href = path/* + '?game=' + game*/;
            }

            $('#buttons_auto_apperance').append(child);
        });
    });
}