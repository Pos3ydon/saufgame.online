var path = './games.html';

window.onload = function() {

    $("#loadFooter").load("../footer.html");

    $.getJSON('./json/gamelist.json', function (json) {

        $.each(json, function (game, data) {
            console.log(game);

            if (game !== "pages/sendInSuggestion") {
                var child = document.createElement('div');
                child.innerHTML = '<b>' + data.name + '</b>';
                child.className = 'gameButton btns';


                child.onclick = function () {
                    window.sessionStorage.setItem("page", game + ".html");
                    window.location.href = path/* + '?game=' + game*/;
                }

                $('#buttons_auto_apperance').append(child);
            }
        });
    });
}