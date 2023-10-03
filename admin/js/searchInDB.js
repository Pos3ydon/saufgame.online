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
    
                    // Schleife durch die Eigenschaften (Schlüssel-Wert-Paare) von data
                    $.each(data, function(key, value) {
                        if(key == "id"){
                            var input = document.createElement('input');
                            input.type = "text";
                            input.className = "idText";
                            input.value = value;
                            input.disabled = true;
                            div.append(input);
                        }else if(key == "content"){
                            
                            var input = document.createElement('input');
                            input.type = "text";
                            input.className = "singleText";
                            input.value = value;
                            input.data 
                            input.disabled = true;
                            div.append(input);
                            var oldValue = value;
                            var btn_yes = document.createElement('button');
                            var btn_edit = document.createElement('button');
                            btn_edit.className = "btn_edit";
                            btn_edit.onclick = function(e) {
                                $(".singleText").each(function() {
                                    $(this).prop("disabled", true);
                                });
                                input.disabled = !(input.disabled);
                                $(".btn_yes").each(function() {
                                    $(this).prop("disabled", true);
                                });
                                btn_yes.disabled = !(btn_yes.disabled);

                            }
                            div.append(btn_edit);

                            var btn_yes = document.createElement('button');
                            btn_yes.className = "btn_yes";
                            btn_yes.disabled = true;
                            btn_yes.onclick = function(e) {
                                accept_suggestion($("#selectGame")[0].value, input.value, oldValue);
                                $(".btn_yes").each(function() {
                                    $(this).prop("disabled", true);
                                });
                            }
                            div.append(btn_yes);
                        }
                    })
    
                    $("#resultsScrollDiv").append(div);
                });
            });
        }
    });
    
    
});



function accept_suggestion(table, content, value) {
    $.ajax({
        url: "./../php/edit_" + table + ".php",
        type: "POST",
        data: { table: table, content: content, value: value}
    }).done(function(result) {
        console.log(result);
    });
}