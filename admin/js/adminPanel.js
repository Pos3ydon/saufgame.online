var path = './adminPanel.php';

window.onload = function() {


    $.getJSON('./json/adminSitesList.json', function(json) {
        // console.log( "success" );

        $.each( json, function( name, game ) {
            var div = document.createElement('div');
            div.type = 'div';
            div.innerHTML = '<b>' + name + '</b>';
            div.className = 'div-styled';


            div.onclick = function() {
                window.location.href = path + '?section=' + game;
            }

            $('#sidebar').append(div);
        });
    });

    $(".btn_yes").bind({
        click: function(e) {
            var text = this.parentNode.children[0].innerHTML;

            $.ajax({
                url: "../php/add_neverHaveIEver.php",
                type: "POST",
                data: { suggestion: text }
            }).done(function(result) {
                //console.log(result);
            });

            this.parentNode.remove();
        }
    });

    $(".btn_no").bind({
        click: function(e) {
            var text = this.parentNode.children[0].innerHTML;

            $.ajax({
                url: "../php/remove_suggestion_neverHaveIEver.php",
                type: "POST",
                data: { suggestion: text }
            }).done(function(result) {
                //console.log(result);
            });

            this.parentNode.remove();
        }
    });
}