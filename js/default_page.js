var path = '../pages/default_site.php';

window.onload = function() {

    $.getJSON('../json/gamelist.json', function(json) {
        var activePage = window.sessionStorage.getItem("page");

        if(activePage == null) window.location.href = "../index.html";
        if(activePage!= null) $("#content").load(activePage);

        $("#loadFooter").load("../pages/footer.html");

        $.each( json, function( game, data ) {
            var child = document.createElement('div');
            child.innerHTML = '<p>' + data.name + '</p>';
            child.className = 'sidebarButton';

            
            if (activePage.search(game) != -1) $(child).addClass("activeButton");

            child.onclick = function() {
                loadPage(game + ".html", this);
            }

            $('#buttons_auto_apperance').append(child);
        });
    });

    var sidebarOpened = false;
    var sidebarLeft = 0;
    $("#btn_openSidebar").bind({
        click: function() {
            if (!sidebarOpened) {
                setTimeout(function() {
                    sidebarLeft = $("#sidebar").offset().left;
                    $("#sidebar").animate({left: "0%"}, 500);
                    sidebarOpened = true;
                }, 50);
            }
        }
    });

    $(window).bind({
        click: function() {
            if (sidebarOpened) {
                $("#sidebar").animate({left: sidebarLeft}, 500);
                sidebarOpened = false;
            }
        }
    })
}

function loadPage(path, sender) {
    $(".activeButton").removeClass("activeButton");
    $(sender).addClass("activeButton");
    $("#content").load(path);
    window.sessionStorage.setItem("page", path)
}
