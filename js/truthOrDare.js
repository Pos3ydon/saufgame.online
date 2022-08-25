$(document).ready(function() {

    $("#nextTruthButton").bind({
        click: function(e) {
            getRecord("Truth");
        }
    });
    
    $("#nextDareButton").bind({
        click: function(e) {
            getRecord("Dare");
        }
    });
});


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
        $("#randomText").html(result);
        if (data.type == "Truth")
            $("#truthOrDareType").html("Wahrheit");
        else
            $("#truthOrDareType").html("Pflicht");
    });
}

