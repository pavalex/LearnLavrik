window.onload = function () {

    var item = document.querySelectorAll('.item');
    var divPrice = document.querySelector('.res');

    for (var i = 0; i < item.length; i++) {
        item[i].onclick = function () {
            this.classList.toggle('item-red');
            calcPrice();            
        }
    }
    
    function calcPrice() {
        var price = 0;

        for (var i = 0; i < item.length; i++) {
            if (item[i].classList.contains('item-red')) {
                price += parseInt(item[i].getAttribute('data-price'));
            }
        }

        // noinspection JSValidateTypes
        divPrice.innerHTML = price;
    }

};