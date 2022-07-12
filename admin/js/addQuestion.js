window.onload = function() { 

    $.getJSON('./../../json/gamelist.json', function(json) {
        // console.log( "success" );

        var selector = $("#selectGame");
        
        $.each( json, function( name, game ) {
            var child = document.createElement('option');
            //div.type = 'div';
            child.innerHTML = '<b>' + name + '</b>';
            child.className = 'option';

            selector.append(child);
        });
    });

}