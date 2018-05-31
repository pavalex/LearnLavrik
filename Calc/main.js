window.onload = function (ev) {

    // var btn = document.querySelector('input[name=sum]');
    var inp1 = document.querySelector('input[name=num1]');
    var inp2 = document.querySelector('input[name=num2]');
    var span = document.querySelector('.res');
    var buttons = document.querySelectorAll('input[type=button]');

    for (var i = 0; i <buttons.length; i ++) {
        buttons[i].onclick = function () {
            var op = this.getAttribute('data-op');
            calcForm(op);
        }
    }

    // btn.onclick = function () {
    //     var res;
    //     res = parseInt(inp1.value) + parseInt(inp2.value);
    //     span.innerHTML = res;
    //     // noinspection JSUnusedGlobalSymbols
    //     this.disabled = true;
    // };
    //
    // inp1.oninput = btnEnable;
    // inp2.oninput = btnEnable;
    //
    // function  btnEnable() {
    //     btn.disabled = false;
    // }

    function calcForm(op) {
        var a = parseInt(inp1.value);
        var b = parseInt(inp2.value);
        var res;

        switch(op) {
            case '+':
                res = a + b;
                break;
            case '-':
                res = a - b;
                break;
            case '*':
                res = a * b;
                break;
            case '/':
                res = a / b;
                break;
            default:
                res = 'Неизвестная операция';
                break;
        }

        /*if(op === '+') {
            res = a + b;
        }

        else if (op === '-') {
            res = a - b;
        }
        else if (op === '*') {
            res = a * b;
        }
        else if (op === '/') {
            res = a / b;
        }*/

        span.innerHTML = res;
    }



};