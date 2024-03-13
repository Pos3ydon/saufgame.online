window.onload = function() {

    $.getJSON('../json/gamelist.json', function(json) {
        var activePage = window.sessionStorage.getItem("page");
        if(activePage == null) window.location.href = "/";
        if(activePage!= null) $("#content").load(activePage);

        $("#loadFooter").load("./footer.html");

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

}

window.addEventListener('resize', function() {
    document.getElementById('sidebar__wrapper').style.height = window.innerHeight + 'px';
});

// Initial height adjustment
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('sidebar__wrapper').style.height = window.innerHeight + 'px';
});


$(document).ready(function(){
    $("#btn_openSidebar").on('click', function() {
        var btn = $("#sidebar").attr("data-active");
        if (btn === "0") {
            $("#sidebar").attr("data-active", "1");
        }
    });

    $("#sidebar").on('click', function(event) {
        // Prevent the event from bubbling up to the document level
        event.stopPropagation();

        var btn = $("#sidebar").attr("data-active");
        if (btn === "1") {
            $("#sidebar").attr("data-active", "0");
        }
    });
});



function loadPage(path, sender) {
    $(".activeButton").removeClass("activeButton");
    $(sender).addClass("activeButton");
    $("#content").load(path);
    window.sessionStorage.setItem("page", path)
}