$(document).ready(function() {

    $.getJSON('./../../json/gamelist.json', function(json) {
        $.each( json, function( game, data ) {
            var child = document.createElement('button');
            child.innerHTML = data.name;
            child.className = 'tabButton';


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
                        div.innerHTML = "<p class='suggestionText'>" + suggestion.suggestion + "</p><button class='btn_yes'></button><button class='btn_no'></button>";
                        div.className = "suggestion";

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



    $(".btn_yes").bind({
        click: function(e) {
            var text = this.parentNode.children[0].innerHTML;

            $.ajax({
                url: "./../php/add_neverHaveIEver.php",
                type: "POST",
                data: { suggestion: text }
            }).done(function(result) {
                //console.log(result);
            });

            this.parentNode.remove();
        }
    });

    $(".btn_no").bind({
        click: function(e) {
            var text = this.parentNode.children[0].innerHTML;

            $.ajax({
                url: "./../php/remove_suggestion_neverHaveIEver.php",
                type: "POST",
                data: { suggestion: text }
            }).done(function(result) {
                //console.log(result);
            });

            this.parentNode.remove();
        }
    });
});