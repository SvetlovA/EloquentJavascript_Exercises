var object = document.getElementsByClassName("object");
var angle = 0, lastTime = null;5
function animate(time) {
    var x = 0, y = 0;
    if (lastTime != null)
        angle += (time - lastTime) * 0.001;
    lastTime = time;
    x = (Math.sin(angle) * 200 + 300);
    y = (Math.cos(angle) * 200 + 300);
    object[0].style.top = x + "px";
    object[0].style.left = y + "px";

    var angle2 = angle * 3;

    object[1].style.top = (Math.sin(angle2) * 200 + x) + "px";
    object[1].style.left = (Math.cos(angle2) * 200 + y) + "px";

    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);