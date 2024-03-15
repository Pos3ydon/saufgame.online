$(document).ready(function() {


    $("#nextQuestionButton").bind({
        click: function(e) {
            $.ajax({
                url: "./../php/getRecord_neverHaveIEver.php",
                type: "POST",
                data: {}
            }).done(function(result) {

                result = result.split(",");

                var item = sessionStorage.getItem('nhie_' + result[0]);
                if (item !== null) {
                    $("#nextQuestionButton").click();
                } else {
                    sessionStorage.setItem('nhie_' + result[0], result[1]);
                    if(result.length == 5){
                        result = result[1] + "," + result[2] + "," + result[3];
                        document.getElementById("randomNeverHaveIEverText").innerHTML = "<a>Ich habe noch nie " +  result + "</a>";
                    }
                    else if(result.length == 4){
                        result = result[1] + "," + result[2];
                        document.getElementById("randomNeverHaveIEverText").innerHTML = "<a>Ich habe noch nie " +  result + "</a>";
                    }
                    else if(result.length == 3){
                        document.getElementById("randomNeverHaveIEverText").innerHTML = "<a>Ich habe noch nie " +  result[1] + "</a>";

                    }
                }
            });
        }
    });
    $("#nextQuestionButton").click();
});


