$(document).ready(function() {
    $.ajax({
        url: "./../php/getQuestion_neverHaveIEver.php",
        type: "POST",
        data: {}
    }).done(function(result) {
        console.log(result);
    });
});