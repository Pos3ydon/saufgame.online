var path = '../sites/default_site.php';

window.onload = function() {

    $.getJSON('../json/gamelist.json', function(json) {
        // console.log( "success" );

        $.each( json, function( name, game ) {
            var div = document.createElement('div');
            div.type = 'div';
            div.innerHTML = '<b>' + name + '</b>';
            div.className = 'div-styled';


            div.onclick = function() {
                window.location.href = path + '?game=' + game;
            }

            $('#buttons_auto_apperance').append(div);
        });
    });
}
