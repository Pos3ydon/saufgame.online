var path = './pages/default_site.php';

window.onload = function() {

    $("#loadFooter").load("../pages/footer.html");

    $.getJSON('./json/gamelist.json', function(json) {
        console.log(json);


        var margin = 10;
        var gameCount = Object.keys(json).length;
        // if (navigator.userAgentData.mobile) { //Margin calculator for mobile
        //     margin = (100 - (gameCount * 28)) / (gameCount + 1);
    
        //     if (margin < 5)
        //         margin = 5;

        // }
        // else { //Margin calculator for deskt
            margin = (100 - (gameCount * 20)) / (gameCount + 1);
    
            if (margin < 10)
                margin = 10;
        // }


        
        $.each( json, function( game, data ) {
            console.log(game);

            var child = document.createElement('div');
            child.innerHTML = '<b>' + data.name + '</b>';
            child.className = 'gameButton btns';
            child.style.marginLeft = margin + "%";


            child.onclick = function() {
                window.sessionStorage.setItem("page", game + ".html");
                window.location.href = path/* + '?game=' + game*/;
            }

            $('#buttons_auto_apperance').append(child);
        });
    });
}


// $(document).ready(function(){

//     var scrolledUp = false;

    
//     window.addEventListener("wheel", function(e) {
//         e.preventDefault();
//         // console.log($("#footer-container").height());
//         // console.log($("#top-footer").height());
//         // console.log($("#mid-footer").height());
//         // console.log($("#copyright").height());
//         // var footerHeight = $("#top-footer").height() + $("#mid-footer").height() + $("#copyright").height() + 50;

//         if (e.wheelDeltaY < 0 && scrolledUp == false) {
//             $("#footer").animate({top: "-=" + $("#footer-container").height() + "px"}, 500);
//             scrolledUp = true;
//         }
//         else if (e.wheelDeltaY > 0 && scrolledUp == true) {
//             $("#footer").animate({top: "100%"}, 500);
//             scrolledUp = false;
//         }
//     }, {passive: false});
// });  