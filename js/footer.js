let touchstartY = 0;
let touchendY = 0;
let scrolledUps = true;
$(document).ready(function(){
    var scrolledUp = false;
    const isMobile = window.matchMedia('only screen and (max-width: 427px)').matches;

    if(isMobile == true){

        window.addEventListener('touchstart', e => {
            touchstartY = e.changedTouches[0].screenY;
        })

        window.addEventListener('touchend', e => {
            touchendY = e.changedTouches[0].screenY;
            checkDirection()
        })
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
    if (touchendY < touchstartY && scrolledUps == true){
        $("#footer").animate({top: "-=" + $("#footer-container").height() + "px"}, 500);
        scrolledUps = false;
    }else if (touchendY > touchstartY && scrolledUps == false) {
        $("#footer").animate({top: "100%"}, 500);
        scrolledUps = true;
    }
  }