$(document).ready(function(){

    const isMobile = window.matchMedia('only screen and (max-width: 427px)').matches;
    if(isMobile == true){
        $("#footer").load("../pages/footer.html");
    }else if(isMobile == false){
        var scrolledUp = false;
        window.addEventListener("wheel", function(e) {

            if (e.wheelDeltaY < 0 && scrolledUp == false) {
                $("#footer").animate({top: "-=" + $("#footer-container").height() + "px"}, 500);
                scrolledUp = true;
            }
            else if (e.wheelDeltaY > 0 && scrolledUp == true) {
                $("#footer").animate({top: "100%"}, 500);
                scrolledUp = false;
            }
        }, {passive: false});
    }
});  