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

        console.log(json);

        
        $.each( json, function( game, data ) {
            console.log(game);

            var child = document.createElement('div');
            child.innerHTML = '<b>' + data.name + '</b>';
            child.className = 'gameButton btns';
            child.style.marginLeft = margin + "%";


            child.onclick = function() {
                window.location.href = path + '?game=' + game;
            }

            $('#buttons_auto_apperance').append(child);
        });
    });
}