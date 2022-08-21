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