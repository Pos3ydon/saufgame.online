$(document).ready(function() {

    $.getJSON('./../../json/gamelist.json', function(json) {
        var selector = $("#selectGame");
        
        $.each( json, function( game, data ) {
            if(data.name !== 'Vorschlag einsenden') {
                var child = document.createElement('option');
                child.innerHTML = '<p>' + data.name + '</p>';
                child.value = data.table;
                child.className = 'gameOption';
                child.id = "btn_" + data.table;

                selector.append(child);
            }
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
                        if(key === "id"){
                            var input = document.createElement('input');
                            input.type = "text";
                            input.className = "idText";
                            input.value = value;
                            input.disabled = true;
                            div.append(input);
                        }
                        else if(key === "content"){


                            const textarea = document.createElement('textarea');
                            textarea.rows = 1;
                            textarea.cols = 150;
                            textarea.className = "singleText";
                            textarea.value = value;
                            textarea.disabled = true;
                            textarea.style.overflowY = "hidden";
                            textarea.style.resize = "none";

                            function autoresize() {
                                this.style.height = "auto";
                                this.style.height = (this.scrollHeight) + "px";
                            }



                            textarea.addEventListener("input", autoresize);

                            setTimeout(autoresize.bind(textarea), 0);

                            div.append(textarea);

                            var oldValue = value;
                            const btn_edit = document.createElement('button');
                            const btn_yes = document.createElement('button');
                            btn_edit.className = "btn_edit";
                            btn_edit.onclick = function(e) {
                                const parentDiv = $(this).closest('.singleResult');
                                const isAlreadyActive = parentDiv.hasClass('active');

                                $(".suggestionText").prop("disabled", true);
                                $(".singleText, .btn_yes").prop("disabled", true);

                                if (isAlreadyActive) {
                                    parentDiv.removeClass('active');
                                } else {
                                    parentDiv.find('.singleText, .btn_yes').prop("disabled", false);
                                    parentDiv.addClass('active');
                                }
                            }
                            div.append(btn_edit);

                            btn_yes.className = "btn_yes";
                            btn_yes.disabled = true;
                            btn_yes.onclick = function(e) {
                                accept_suggestion($("#selectGame")[0].value, textarea.value, oldValue);
                                $(".btn_yes").each(function() {
                                    $(this).prop("disabled", true);
                                    $(textarea).prop("disabled", true);
                                    $(this).closest('.singleResult').removeClass('active');
                                });
                                if(textarea.value.indexOf($("#searchBar")[0].value)) {
                                    $(this).closest('.singleResult').remove();
                                }
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
    }).done();
}