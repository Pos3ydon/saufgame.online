$(document).ready(function() {

    $("#nextQuestionButton").bind({
        click: function(e) {
            $.ajax({
                url: "./../php/getRecord_neverHaveIEver.php",
                type: "POST",
                data: {}
            }).done(function(result) {
                document.getElementById("randomNeverHaveIEverText").innerHTML = "<a>" +  result + "</a>";
            });
        }
    });
    $("#nextQuestionButton").click();
});


