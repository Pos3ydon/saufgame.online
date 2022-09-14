$(document).ready(function() {

    $.getJSON('./../../json/gamelist.json', function(json) {
        $.each( json, function( game, data ) {
            var child = document.createElement('button');
            child.innerHTML = data.name;
            child.id = "btn_" + data.table;


            child.onclick = function() {
                $("#suggestionScrollDiv").empty();
                $("#suggestionScrollDiv").prop("hidden", false);

                $.ajax({
                    url: "./../php/getSuggestions.php",
                    type: "POST",
                    data: { table: "suggestion_" + data.table }
                }).done(function(result) {
                    result = $.parseJSON(result);

                    $.each(result, function(index, suggestion) {
                        var div = document.createElement('div');
                        var input = document.createElement('input');

                        if (data.table == "neverHaveIEver" || data.table == "Select Game") {
                            input.type = "text";
                            input.className = "suggestionText";
                            input.value = suggestion.content;
                            input.disabled = true;
                            div.append(input);
                        }
                        else if (data.table == "truthOrDare") {
                            // div.innerHTML = "<p class='suggestionText'>" + suggestion.type + " - "  + suggestion.content +  "</p>";
                            input.type = "text";
                            input.className = "suggestionText";
                            input.value = suggestion.type + " - " + suggestion.content;
                            input.disabled = true;
                            div.append(input);
                        }
                        div.id = "suggestionDiv";

                        var btn_edit = document.createElement('button');
                        btn_edit.className = "btn_edit";
                        btn_edit.onclick = function(e) {
                            $(".suggestionText").each(function() {
                                $(this).prop("disabled", true);
                            });
                            input.disabled = !(input.disabled);
                        }

                        var btn_yes = document.createElement('button');
                        btn_yes.className = "btn_yes";
                        btn_yes.onclick = function(e) {
                            accept_suggestion(data.table, input.value);
                            //console.log(this.parentNode.children[0].innerHTML);
                            this.parentNode.remove();
                        }

                        var btn_no = document.createElement('button');
                        btn_no.className = "btn_no";
                        btn_no.onclick = function(e) {
                            reject_suggestion(data.table, input.value);
                            //console.log(this.parentNode.children[0].innerHTML);
                            this.parentNode.remove();
                        }

                        div.append(btn_edit);
                        div.append(btn_yes);
                        div.append(btn_no);


                        $("#suggestionScrollDiv").append(div);
                    });
                    
                });

                $.each(this.parentNode.children, function(index, child) {
                    child.disabled = false;
                });
                this.disabled = true;
            }

            $('#tabButtons').append(child);
        });
    });
});

function accept_suggestion(table, content) {
    $.ajax({
        url: "./../php/add_" + table + ".php",
        type: "POST",
        data: { table: table, content: content}
    }).done(function(result) {
        console.log(result);
    });
}

function reject_suggestion(table, content) {
    $.ajax({
        url: "./../php/remove_suggestion_" + table + ".php",
        type: "POST",
        data: { table: table, content: content}
    }).done(function(result) {
        console.log(result);
    });
}