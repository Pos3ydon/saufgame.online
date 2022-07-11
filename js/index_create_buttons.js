var path = './sites/default_site.php';

window.onload = function() {

    $.getJSON('./json/gamelist.json', function(json) {
        // console.log( "success" );


        var margin;
        var gameCount = Object.keys(json).length;
        if (navigator.userAgentData.mobile) { //Margin calculator for mobile
            margin = (100 - (gameCount * 28)) / (gameCount + 1);
    
            if (margin < 5)
                margin = 5;

        }
        else { //Margin calculator for deskt
            margin = (100 - (gameCount * 20)) / (gameCount + 1);
    
            if (margin < 10)
                margin = 10;
        }

        
        $.each( json, function( name, game ) {
            var div = document.createElement('div');
            div.type = 'div';
            div.innerHTML = '<b>' + name + '</b>';
            div.className = 'div-styled';
            div.style.marginLeft = margin + "%";


            div.onclick = function() {
                window.location.href = path + '?game=' + game;
            }

            $('#buttons_auto_apperance').append(div);
        });
    });
}