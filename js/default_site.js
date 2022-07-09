window.onload = function() {
    fetch(GET.game + '.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('content').innerHTML = text);
}
