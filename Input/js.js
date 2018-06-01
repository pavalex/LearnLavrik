window.onload = function () {

    var inputs = document.querySelectorAll('.check');
    var error = false;

    document.querySelector('form').onsubmit = function (e) {
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].value === '') {
                inputs[i].classList.add('err');
                error = true;
            }
            else {
                inputs[i].classList.remove('err');
            }
        }
        if (error) {
            e.preventDefault();
        }
    };
};