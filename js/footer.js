let touchstartX = 0;
let touchendX = 0;
var scrolledUp = false;
$(document).ready(function(){

    
    const isMobile = window.matchMedia('only screen and (max-width: 427px)').matches;
    console.log(isMobile);
    if(isMobile == true){
        

        window.addEventListener('touchstart', e => {
            touchstartX = e.changedTouches[0].screenX
        })

        window.addEventListener('touchend', e => {
            touchendX = e.changedTouches[0].screenX
            checkDirection()
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

function checkDirection() {
    if (touchendX > touchstartX && scrolledUp == true){
        $("#footer").animate({top: "-=" + $("#footer-container").height() + "px"}, 500);
        scrolledUp = false;
        touchstartX = 0;
        touchendX = 0;
    }else if (touchendX < touchstartX && scrolledUp == false) {
        $("#footer").animate({top: "100%"}, 500);
        scrolledUp = true;
        touchstartX = 0;
        touchendX = 0;
    }
  }