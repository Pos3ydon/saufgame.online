var path = '../sites/default_site.php';

$(document).ready(function() {

    $.getJSON('../json/gamelist.json', function(json) {

        // fetch(GET.game + '.html')
        // .then(response=> response.text())
        // .then(text=> document.getElementById('content').innerHTML = text);

        $("#content").load(GET.game + ".html");

        $.each( json, function( game, data ) {
            var div = document.createElement('div');
            div.type = 'div';
            div.innerHTML = '<b>' + data.name + '</b>';
            div.className = 'div-styled';


            div.onclick = function() {
                window.location.href = path + '?game=' + game;
            }

            $('#buttons_auto_apperance').append(div);
        });
    });
});