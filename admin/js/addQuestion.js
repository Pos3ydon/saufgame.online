window.onload = function() { 

    $.getJSON('./../../json/gamelist.js', function(json) {

        var selector = $("#selectGame");
        
        $.each( json, function( name, game ) {
            var child = document.createElement('option');
            child.innerHTML = '<b>' + name + '</b>';
            child.className = 'gameOption';

            selector.append(child);
        });
    });

    $("#submitQuestion").bind({
        click: function(e) {
            if ($("#selectGame")[0].value == "Select Game")
                return;

            var data = {
                suggestion: $("#questionInput")[0].value
            };

            $.ajax({
                url: "./../../php/add_suggestion_" + $("#selectGame")[0].value +".php",
                type: "POST",
                data: data
            }).done(function(result) {
                console.log(result);
            });

        }
    });
}