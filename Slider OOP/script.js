window.onload = function () {
    /*Слайдер 1*/
    var images = document.querySelectorAll('.gallery-1 .photos img');
    var slider = new Slider(images);

    document.querySelector('.gallery-1 .buttons .prev').onclick = function () {
        slider.prev();
    };

    document.querySelector('.gallery-1 .buttons .next').onclick = function () {
        slider.next();
    };
    /*Слайдер 2*/
    var images2 = document.querySelectorAll('.gallery-2 .photos img');
    var slider2 = new Slider(images2);

    document.querySelector('.gallery-2 .buttons .prev').onclick = function () {
        slider2.prev();
    };

    document.querySelector('.gallery-2 .buttons .next').onclick = function () {
        slider2.next();
    };

    /*Класс Slider*/
    function Slider(images) {
        this.images = images;
        var i = 0;

        this.prev = function () {
            this.images[i].classList.remove('showed');
            i--;
            if (i < 0) {
                i = this.images.length - 1;
            }
            this.images[i].classList.add('showed');
        };

        this.next = function () {
            this.images[i].classList.remove('showed');
            i++;
            if (i > this.images.length - 1) {
                i = 0;
            }
            this.images[i].classList.add('showed');
        };
    }

};

