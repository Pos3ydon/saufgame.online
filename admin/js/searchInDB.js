$(document).ready(function() {

    $.getJSON('./../../json/gamelist.json', function(json) {
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

    $("#searchButton").bind({
        click: function() {
            $("#resultsScrollDiv").empty();
            $("#resultsScrollDiv").prop("hidden", false);

            $.ajax({
                url: "./../php/getSearch.php",
                type: "POST",
                data: { table: $("#selectGame")[0].value, content: $("#searchBar")[0].value }
            }).done(function(result) {
                result = $.parseJSON(result);

                $.each(result, function(index, data) {
                    var div = document.createElement('div');
                    div.className = "singleResult";
                    $(div).width(($("#resultsScrollDiv").width()) + "px");

                    $.each(data, function(index, text) {
                        var input = document.createElement('input');
                        input.type = "text";
                        input.className = "singleText";
                        input.value = text;
                        input.disabled = true;
                        $(input).width((($(div).width() - 50) / Object.keys(data).length) + "px");
                        div.append(input);
                    })


                    $("#resultsScrollDiv").append(div);
                });
                
            });
        }
    });
    
});