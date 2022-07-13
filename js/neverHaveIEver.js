window.onload = function() {
    $.ajax({
        url: "./../php/getQuestion_neverHaveIEver.php",
        type: "POST",
        data: data
    }).done(function(result) {
        console.log(result);
    });
}