window.onload = function () {

    var images = document.querySelectorAll('#gallery .photos img');
    var btn_prev = document.querySelector('#gallery .buttons .prev');
    var btn_next = document.querySelector('#gallery .buttons .next');
    var i = 0;

    btn_prev.onclick = function () {
        // images[i].style.display = 'none';
        images[i].className = '';
        i--;
        if (i < 0) {
            i = images.length-1;
        }
        // images[i].style.display = 'block';
        images[i].className = 'showed';
    };

    btn_next.onclick = function () {
        // images[i].style.display = 'none';
        images[i].className = '';
        i++;
        if (i > images.length-1) {
            i = 0;
        }
        // images[i].style.display = 'block';
        images[i].className = 'showed';
    };

    // Просто пример с this
    // var buttons = document.querySelectorAll('button');
    //
    // for (var k = 0; k < buttons.length; k ++) {
    //     buttons[k].onclick = btnclick;
    // }
    //
    // function btnclick() {
    //     var name = this.getAttribute('name');
    //     if (name === 'btn-prev') {
    //         console.log('Назад')
    //     }
    //     else if (name === 'btn-next') {
    //         console.log('Вперед')
    //     }
    // }
};

