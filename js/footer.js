let touchstartY = 0;
let touchendY = 0;
let scrolledUp = true;
$(document).ready(function(){
    $("#footer").removeAttr("style");
    var scrolledUp = false;
    const isMobile = window.matchMedia('only screen and (max-width: 767px)').matches;



    if(isMobile === true){
        $("#top-footer__wrapper").attr("data-wrap-width", "small");



        window.addEventListener('touchstart', e => {
            touchstartY = e.changedTouches[0].screenY;
        })

        window.addEventListener('touchend', e => {
            touchendY = e.changedTouches[0].screenY;
            checkDirection()
        })
    }
    
    window.addEventListener("wheel", function(e) {

        $("#btn_openSidebar").on('click', function() {
            var btn = $("#sidebar").attr("data-active");
            if (btn === "0") {

            }
        });

        if (e.wheelDeltaY > 0 && $("#footer").attr("data-open") === "1") {
            $("#footer").attr("data-open", "0");
        }
        else if (e.wheelDeltaY < 0 && $("#footer").attr("data-open") === "0") {
            $("#footer").attr("data-open", "1");
        }
    }, {passive: false});
});  

function checkDirection() {
    if (touchendY > touchstartY && $("#footer").attr("data-open") === "1"){
        $("#footer").attr("data-open", "0");
    }else if (touchendY < touchstartY && $("#footer").attr("data-open") === "0") {
        $("#footer").attr("data-open", "1");
    }
  }