$(document).ready(function() {

    var alreadyUsed = [];

    $("#nextQuestionButton").bind({
        click: function(e) {
            $.ajax({
                url: "./../php/getRecord_neverHaveIEver.php",
                type: "POST",
                data: {}
            }).done(function(result) {
                console.log(result);
                result = result.split(",");

                if (alreadyUsed.length.toString() == result[2])
                    alreadyUsed = [];

                if (alreadyUsed.find(element => element == result[0]) == undefined || alreadyUsed.length > 100) {
                    alreadyUsed.push(result[0]);
                    console.log(result[1] + result[2]);

                    if(result.length == 5){
                        result = result[1] + "," + result[2] + "," + result[3];
                        document.getElementById("randomNeverHaveIEverText").innerHTML = "<a>Ich habe noch nie " +  result + "</a>";
                    } else if(result.length == 4){
                        result = result[1] + "," + result[2];
                        document.getElementById("randomNeverHaveIEverText").innerHTML = "<a>Ich habe noch nie " +  result + "</a>";
                    }if(result.length == 3){
                        document.getElementById("randomNeverHaveIEverText").innerHTML = "<a>Ich habe noch nie " +  result[1] + "</a>";

                    }

                    
                }
                else {
                    $("#nextQuestionButton").click();
                }
            });
        }
    });
    $("#nextQuestionButton").click();
});


