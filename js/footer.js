$(document).ready(function(){

    var scrolledUp = false;

    
    window.addEventListener("wheel", function(e) {
        //e.preventDefault();
        // console.log($("#footer-container").height());
        // console.log($("#top-footer").height());
        // console.log($("#mid-footer").height());
        // console.log($("#copyright").height());
        // var footerHeight = $("#top-footer").height() + $("#mid-footer").height() + $("#copyright").height() + 50;

        if (e.wheelDeltaY < 0 && scrolledUp == false) {
            $("#footer").animate({top: "-=" + $("#footer-container").height() + "px"}, 500);
            scrolledUp = true;
        }
        else if (e.wheelDeltaY > 0 && scrolledUp == true) {
            $("#footer").animate({top: "100%"}, 500);
            scrolledUp = false;
        }
    }, {passive: false});
});  