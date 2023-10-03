$(document).ready(function() {

    $.getJSON('./../json/gamelist.json', function(json) {
        var selector = $("#selectGame");
        
        $.each( json, function( game, data ) {
            var child = document.createElement('option');
            child.innerHTML = '<p>' + data.name + '</p>';
            child.value = data.table;
            child.className = 'gameOption';
            child.id = "btn_" + data.table;

            selector.append(child);
        });
    });


    $("#submitQuestion").bind({
        click: function(e) {
            var game = $("#selectGame")[0].value;
            var data = {};

            if (game == "Select Game")
                return;
            else if (game == "neverHaveIEver") {
                data = {
                    suggestion: $("#suggestionText")[0].value
                };
            }
            else if (game == "truthOrDare") {
                data = {
                    suggestion: $("#suggestionText")[0].value,
                    type: $("#appendedSelect")[0].value
                };
            }


            $.ajax({
                url: "./../php/add_suggestion_" + game +".php",
                type: "POST",
                data: data
            }).done(function(result) {
                console.log(result);
            });
        }
    });

    $("#selectGame").bind({
        change: function(e) {
            var game = $("#selectGame")[0].value;
            var newContent;
            
            if (game == "neverHaveIEver" || game == "Select Game") {
                $("#appendedSelect").remove();
            }
            else if (game == "truthOrDare") {
                newContent = `
                    <select id='appendedSelect'>
                        <option class='appendedOption' value='truth'>Truth</option>
                        <option class='appendedOption' value='dare'>Dare</option>
                    </select>`;

                $("#selectGameDiv2").append(newContent);
            }
        }
    });
});