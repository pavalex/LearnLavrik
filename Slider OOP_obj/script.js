window.onload = function () {
    /*Слайдер 1*/
    new Slider({
        images: '.gallery-1 .photos img',
        btnPrev: '.gallery-1 .buttons .prev',
        btnNext: '.gallery-1 .buttons .next',
        auto: false
    });

    /*Слайдер 2*/
    new Slider({
        images: '.gallery-2 .photos img',
        btnPrev: '.gallery-2 .buttons .prev',
        btnNext: '.gallery-2 .buttons .next',
        auto: true,
        rate: 3000
    });

    /*Класс Slider*/
    function Slider(obj) {
        this.images = document.querySelectorAll(obj.images);
        this.auto = obj.auto;
        this.btnPrev = obj.btnPrev;
        this.btnNext = obj.btnNext;
        this.rate = obj.rate || 1000;

        var i = 0;
        var slider = this;

        this.prev = function () {
            slider.images[i].classList.remove('showed');
            i--;
            if (i < 0) {
                i = slider.images.length - 1;
            }
            slider.images[i].classList.add('showed');
        };

        this.next = function () {
            slider.images[i].classList.remove('showed');
            i++;
            if (i > slider.images.length - 1) {
                i = 0;
            }
            slider.images[i].classList.add('showed');
        };

        document.querySelector(slider.btnPrev).onclick = slider.prev;

        document.querySelector(slider.btnNext).onclick = slider.next;

        if (slider.auto) {
            setInterval(slider.next, slider.rate);
        }
    }
};





