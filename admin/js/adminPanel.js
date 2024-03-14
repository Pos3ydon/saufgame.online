$(document).ready(function() {

    $.getJSON('./../json/adminSiteList.json', function(json) {

        $.each( json, function( name, site ) {

            var child = document.createElement('div');
            child.innerHTML = '<p>' + name + '</p>';
            child.className = 'sidebarButton';
            $("#content").load("rootPanel.php")
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

window.addEventListener('resize', function() {
    document.getElementById('sidebar__wrapper').style.height = window.innerHeight + 'px';
});

// Initial height adjustment
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('sidebar__wrapper').style.height = window.innerHeight + 'px';
});