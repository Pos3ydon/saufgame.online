$(document).ready(function() {

    $.getJSON('./../json/gamelist.json', function(json) {

        $.each( json, function( game, data ) {
            var child = document.createElement('option');
            child.innerHTML = '<p>' + data.name + '</p>';
            child.value = data.table;
            child.className = 'gameOption';

            $("#selectGame").append(child);
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
});