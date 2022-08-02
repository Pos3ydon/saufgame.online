var path = '../sites/default_site.php';

$(document).ready(function() {

    $.getJSON('../json/gamelist.json', function(json) {

        console.log(json);
        // fetch(GET.game + '.html')
        // .then(response=> response.text())
        // .then(text=> document.getElementById('content').innerHTML = text);

        $("#content").load(GET.game + ".html");

        $.each( json, function( game, data ) {
            var child = document.createElement('div');
            // child.type = 'div';
            child.innerHTML = '<b>' + data.name + '</b>';
            child.className = 'sidebarButton';


            child.onclick = function() {
                window.location.href = path + '?game=' + game;
            }

            $('#buttons_auto_apperance').append(child);
        });
    });
});