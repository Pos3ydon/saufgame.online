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

    const isMobile = window.matchMedia('only screen and (max-width: 480px)').matches;
    if(isMobile) {
        $("#main").attr("data-wrap-width", "game-large");
    } else {
        $("#main").attr("data-wrap-width", "medium");
    }
});


window.addEventListener('resize', function(event){
    const isMobile = window.matchMedia('only screen and (max-width: 480px)').matches;
    if(isMobile) {
        $("#main").attr("data-wrap-width", "game-large");
    } else {
        $("#main").attr("data-wrap-width", "medium");
    }
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

        result = result.split(",");


        var item = sessionStorage.getItem('tod_' + result[0]);


        if (item !== null) {
            $("#next" + (type.charAt(0).toUpperCase() + type.slice(1)) + "Button").click();
        } else {
            sessionStorage.setItem('tod_' + result[0], result[1]);
            if(result.length === 5){
                result = result[1] + "," + result[2] + "," + result[3];
                $("#randomText").html(result);

                if (data.type === "truth")
                    $("#truthOrDareType").html("Wahrheit");
                else
                    $("#truthOrDareType").html("Pflicht");
            }
            else if (result.length === 4){
                result = result[1] + "," + result[2];
                $("#randomText").html(result);

                if (data.type === "truth")
                    $("#truthOrDareType").html("Wahrheit");
                else
                    $("#truthOrDareType").html("Pflicht");
            }
            else if(result.length === 3){
                $("#randomText").html(result[1]);

                if (data.type === "truth")
                    $("#truthOrDareType").html("Wahrheit");
                else
                    $("#truthOrDareType").html("Pflicht");
            }
        }
    });
}

