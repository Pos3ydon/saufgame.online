var path = '../sites/default_site.php';

$(document).ready(function() {

    $.getJSON('../json/gamelist.json', function(json) {

        //console.log(json);
        // fetch(GET.game + '.html')
        // .then(response=> response.text())
        // .then(text=> document.getElementById('content').innerHTML = text);

        $("#content").load(GET.game + ".html");
        $("#loadFooter").load("../pages/footer.html");

        $.each( json, function( game, data ) {
            var child = document.createElement('div');
            child.innerHTML = '<p>' + data.name + '</p>';
            child.className = 'sidebarButton';


            child.onclick = function() {
                window.location.href = path + '?game=' + game;
            }

            $('#buttons_auto_apperance').append(child);
        });
    });
});