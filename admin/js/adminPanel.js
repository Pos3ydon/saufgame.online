$(document).ready(function() {

    $.getJSON('./../json/adminSiteList.json', function(json) {

        $.each( json, function( name, site ) {

            var child = document.createElement('div');
            child.innerHTML = '<p>' + name + '</p>';
            child.className = 'sidebarButton';


            child.onclick = function() {
                $("#content").load(site + ".php");
            }

            $('#sidebarButtons').prepend(child);
        });
    });

    $("#logoutButton").bind({
        click: function(e) {
            window.location.href = "./../php/logout.php";
        }
    });
});

window.onload = function(){
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