(function () {
    var images = document.getElementsByClassName("trail");

    document.body.addEventListener("mousemove", function (event) {
        for (var i = 0; i < images.length; i++) {
            images[i].style.top = event.pageY + "px";
            images[i].style.left = event.pageX + "px";
        }
    });

    document.body.addEventListener("click", function (event) {
        for (var i = 0; i < images.length; i++) {
            images[i].style.top = event.pageY + "px";
            images[i].style.left = event.pageX + "px";
        }
    });
}());