var path = './pages/default_page.html';

window.onload = function() {

    $("#loadFooter").load("../pages/footer.html");

    $.getJSON('./json/gamelist.json', function(json) {
        
        $.each( json, function( game, data ) {
            // console.log(game);

            var child = document.createElement('div');
            child.innerHTML = '<b>' + data.name + '</b>';
            child.className = 'gameButton btns';


            child.onclick = function() {
                window.sessionStorage.setItem("page", game + ".html");
                window.location.href = path/* + '?game=' + game*/;
            }

            $('#buttons_auto_apperance').append(child);
        });
    });
}