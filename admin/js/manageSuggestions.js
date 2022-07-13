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
                        div.innerHTML = "<p class='suggestionText'>" + suggestion.suggestion + "</p>";//<button class='btn_yes'></button><button class='btn_no'></button>";
                        div.className = "suggestion";

                        var btn_yes = document.createElement('button');
                        btn_yes.className = "btn_yes";
                        btn_yes.click = function(e) {
                            accept_suggestion(this.parentNode.children[0].innerHTML);
                            this.parentNode.remove();
                        }

                        var btn_no = document.createElement('button');
                        btn_no.className = "btn_no";
                        btn_no.click = function(e) {
                            reject_suggestion(this.parentNode.children[0].innerHTML);
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



    // $(".btn_yes").bind({
    //     click: function(e) {
    //         var text = this.parentNode.children[0].innerHTML;

    //         console.log("lol");

    //         $.ajax({
    //             url: "./../php/add_neverHaveIEver.php",
    //             type: "POST",
    //             data: { suggestion: text }
    //         }).done(function(result) {
    //             console.log(result);
    //         });

    //         this.parentNode.remove();
    //     }
    // });

    // $(".btn_no").bind({
    //     click: function(e) {
    //         var text = this.parentNode.children[0].innerHTML;

    //         $.ajax({
    //             url: "./../php/remove_suggestion_neverHaveIEver.php",
    //             type: "POST",
    //             data: { suggestion: text }
    //         }).done(function(result) {
    //             console.log(result);
    //         });

    //         this.parentNode.remove();
    //     }
    // });
});

function accept_suggestion(suggestion) {
    $.ajax({
        url: "./../php/add_neverHaveIEver.php",
        type: "POST",
        data: { suggestion: suggestion }
    }).done(function(result) {
        console.log(result);
    });
}

function reject_suggestion(suggestion) {
    $.ajax({
        url: "./../php/remove_suggestion_neverHaveIEver.php",
        type: "POST",
        data: { suggestion: suggestion }
    }).done(function(result) {
        console.log(result);
    });
}