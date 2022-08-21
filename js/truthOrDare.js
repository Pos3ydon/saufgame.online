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
        $("#truthOrDareType").html(data.type);
    });
}

