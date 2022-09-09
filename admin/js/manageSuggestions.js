$(document).ready(function() {

    $.getJSON('./../../json/gamelist.json', function(json) {
        $.each( json, function( game, data ) {
            var child = document.createElement('button');
            child.innerHTML = data.name;
            child.className = data.table;


            child.onclick = function() {
                $("#suggestionScrollDiv").empty();

                $.ajax({
                    url: "./../php/getSuggestions.php",
                    type: "POST",
                    data: { table: "suggestion_" + data.table }
                }).done(function(result) {
                    result = $.parseJSON(result);

                    $.each(result, function(index, suggestion) {
                        var div = document.createElement('div');

                        if (data.table == "neverHaveIEver" || data.table == "Select Game") {
                            div.innerHTML = "<p class='suggestionText'>" + suggestion.content + "</p>";
                        }
                        else if (game == "truthOrDare") {
                            div.innerHTML = "<p class='suggestionText'>" + suggestion.type + " - "  + suggestion.content +  "</p>";
                        }
                        div.id = "suggestionDiv";

                        var btn_yes = document.createElement('button');
                        btn_yes.className = "btn_yes";
                        btn_yes.innerText = "✔";
                        btn_yes.onclick = function(e) {
                            accept_suggestion(data.table, this.parentNode.children[0].innerHTML);
                            console.log(this.parentNode.children[0].innerHTML);
                            this.parentNode.remove();
                        }

                        var btn_no = document.createElement('button');
                        btn_no.className = "btn_no";
                        btn_no.innerText = "❌";
                        btn_no.onclick = function(e) {
                            reject_suggestion(data.table, this.parentNode.children[0].innerHTML);
                            console.log(this.parentNode.children[0].innerHTML);
                            this.parentNode.remove();
                        }

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
        data: { type: table, content: content}
    }).done(function(result) {
        console.log(result);
    });
}

function reject_suggestion(table, content) {
    $.ajax({
        url: "./../php/remove_suggestion_" + table + ".php",
        type: "POST",
        data: { type: table, content: content}
    }).done(function(result) {
        console.log(result);
    });
}