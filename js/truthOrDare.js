$(document).ready(function() {

    $("#nextTruthButton").bind({
        click: function(e) {
            getRecord("truth");
        }
    });
    
    $("#nextDareButton").bind({
        click: function(e) {
            getRecord("dare");
        }
    });
});


var alreadyUsed = [];
function getRecord(type) {
    var data = {
        type: type
    }

    $.ajax({
        url: "./../php/getRecord_truthOrDare.php",
        type: "POST",
        data: data
    }).done(function(result) {
        console.log(result);
        
        result = result.split(",");
        console.log(result.length);

        if (alreadyUsed.length.toString() == result[2] || alreadyUsed.length > 100)
            alreadyUsed = [];
            
        if (alreadyUsed.find(element => element == result[0]) == undefined) {
            alreadyUsed.push(result[0]);
            if(result.length == 5){
                result = result[1] + "," + result[2] + "," + result[3];
                $("#randomText").html(result);

                if (data.type == "truth")
                    $("#truthOrDareType").html("Wahrheit");
                else
                    $("#truthOrDareType").html("Pflicht");
            }
            else if (result.length == 4){
                result = result[1] + "," + result[2];
                $("#randomText").html(result);

                if (data.type == "truth")
                    $("#truthOrDareType").html("Wahrheit");
                else
                    $("#truthOrDareType").html("Pflicht");
            }
            else if(result.length == 3){
                $("#randomText").html(result[1]);

                if (data.type == "truth")
                    $("#truthOrDareType").html("Wahrheit");
                else
                    $("#truthOrDareType").html("Pflicht");
            }
        }
        else {
            console.log(type.charAt(0).toUpperCase() + type.slice(1));
            $("#next" + (type.charAt(0).toUpperCase() + type.slice(1)) + "Button").click();
        }
    });
}

