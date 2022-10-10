let touchstartY = 0;
let touchendY = 0;
var scrolledUp = false;
$(document).ready(function(){

    
    const isMobile = window.matchMedia('only screen and (max-width: 427px)').matches;
    console.log(isMobile);
    if(isMobile == true){
        

        window.addEventListener('pointerdown', e => {
            if (touchendY > touchstartY && scrolledUp == false) {
                $("#footer").animate({top: "100%"}, 500);
                scrolledUp = true;
            }
        })

        window.addEventListener('pointerup', e => {
            if (touchendY < touchstartY && scrolledUp == true){
                $("#footer").animate({top: "-=" + $("#footer-container").height() + "px"}, 500);
                scrolledUp = false;
            }
        })
        return;
    }
    
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
});  
