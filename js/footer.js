$(document).ready(function(){

    var scrolledUp = false;
    const isMobile = window.matchMedia('only screen and (max-width: 427px)').matches;
    console.log(isMobile);
    if(isMobile == true){
        let touchstartX = 0
        let touchendX = 0

        document.addEventListener('touchstart', e => {
            touchstartX = e.changedTouches[0].screenX
        })

        document.addEventListener('touchend', e => {
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
    if (touchendX < touchstartX) alert('swiped down!')
    if (touchendX > touchstartX) alert('swiped up!')
  }