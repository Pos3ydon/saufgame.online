$(document).ready(function() {
    $("#nextQuestionButton").click();


    $("#nextQuestionButton").bind({
        click: function(e) {
            $.ajax({
                url: "./../php/getQuestion_neverHaveIEver.php",
                type: "POST",
                data: {}
            }).done(function(result) {
                document.getElementById("randomNeverHaveIEverText").innerHTML = "<a>" +  result + "</a>";
                console.log(result);
            });
        }
    });
});


