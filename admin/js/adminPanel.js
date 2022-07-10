window.onload = function() { 

    $(".btn_yes").bind({
        click: function(e) {
            var text = this.parentNode.children[0].innerHTML;

            $.ajax({
                url: "../../php/add_neverHaveIEver.php",
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
                url: "../../php/remove_suggestion_neverHaveIEver.php",
                type: "POST",
                data: { suggestion: text }
            }).done(function(result) {
                //console.log(result);
            });

            this.parentNode.remove();
        }
    });
}