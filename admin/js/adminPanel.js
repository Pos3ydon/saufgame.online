var path = './adminPanel.php';

window.onload = function() {

<<<<<<< Updated upstream
=======
    fetch('adminSites/' + GET.site + '.html')
        .then(response=> response.text())
        .then(text=> document.getElementById('content').innerHTML = text);


>>>>>>> Stashed changes
    $.getJSON('./json/adminSitesList.json', function(json) {
        // console.log( "success" );

        $.each( json, function( name, site ) {
            var child = document.createElement('div');
            child.innerHTML = '<b>' + name + '</b>';
            child.className = 'sitebarButton';


            child.onclick = function() {
                fetch(site + '.php')
                .then(response=> response.text())
                .then(text=> document.getElementById('content').innerHTML = text);
            }

            $('#sidebar').append(child);
        });
    });

    // $(".btn_yes").bind({
    //     click: function(e) {
    //         var text = this.parentNode.children[0].innerHTML;

    //         $.ajax({
    //             url: "../php/add_neverHaveIEver.php",
    //             type: "POST",
    //             data: { suggestion: text }
    //         }).done(function(result) {
    //             //console.log(result);
    //         });

    //         this.parentNode.remove();
    //     }
    // });

    // $(".btn_no").bind({
    //     click: function(e) {
    //         var text = this.parentNode.children[0].innerHTML;

    //         $.ajax({
    //             url: "../php/remove_suggestion_neverHaveIEver.php",
    //             type: "POST",
    //             data: { suggestion: text }
    //         }).done(function(result) {
    //             //console.log(result);
    //         });

    //         this.parentNode.remove();
    //     }
    // });
}