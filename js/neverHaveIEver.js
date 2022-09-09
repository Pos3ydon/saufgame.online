$(document).ready(function() {

    var alreadyUsed = [];

    $("#nextQuestionButton").bind({
        click: function(e) {
            $.ajax({
                url: "./../php/getRecord_neverHaveIEver.php",
                type: "POST",
                data: {}
            }).done(function(result) {
                result = result.split(",");

                if (alreadyUsed.length.toString() == result[2])
                    alreadyUsed = [];

                if (alreadyUsed.find(element => element == result[0]) == undefined || alreadyUsed.length > 100) {
                    alreadyUsed.push(result[0]);
                    document.getElementById("randomNeverHaveIEverText").innerHTML = "<a>Ich habe noch nie " +  result[1] + ".</a>";
                }
                else {
                    $("#nextQuestionButton").click();
                }
            });
        }
    });
    $("#nextQuestionButton").click();
});


