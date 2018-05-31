window.onload = function (ev) {

    var links = document.querySelectorAll('a[target=_blank]');

    for (var i = 0; i < links.length; i++) {
        links[i].onclick = confirmAway;
    }

    function confirmAway() {

        // ev.preventDefault();
        if (!confirm('Мы не гарантируем переход на этот сайт!')) {
            return false;
        }

    }

    var images = document.querySelectorAll('.gallery img');

    for (var y = 0; y < images.length; y++) {
        images[y].onmousedown = stopMove;
        images[y].oncontextmenu = stopMove;
    }
    
    function stopMove() {
        return false;
    }


};