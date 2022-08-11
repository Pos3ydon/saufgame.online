window.onload = function() {

    $("#loadFooter").load("../pages/footer.html");

    $.getJSON('./../json/gamelist.json', function(json) {
        var selector = $("#selectGame");
        
        $.each( json, function( name, game ) {
            var child = document.createElement('option');
            child.innerHTML = '<p>' + game.name + '</p>';
            child.value = game.table;
            child.className = 'gameOption';

            selector.append(child);
        });
    });

    $("#submitSuggestion").bind({
        click: function(e) {
            if ($("#selectGame")[0].value == "Select Game") {
                alert("Please select the right game");
                return;
            }

            var data = {
                suggestion: $("#suggestionText")[0].value
            };

            $.ajax({
                url: "./../php/add_suggestion_" + $("#selectGame")[0].value +".php",
                type: "POST",
                data: data
            }).done(function(result) {
                console.log(result);
            });

            $("#suggestionText").val("");
        }
    });
}