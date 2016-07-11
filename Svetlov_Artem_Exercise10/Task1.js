(function () {
    var field = document.querySelector("input");

    field.addEventListener("keydown", function (event) {
        if (String.fromCharCode(event.keyCode) == 'Q' || String.fromCharCode(event.keyCode) == 'W' || String.fromCharCode(event.keyCode) == 'X') {
            event.preventDefault();
        }
    });
}());

