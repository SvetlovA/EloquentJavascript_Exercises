var cx = document.querySelector("canvas").getContext("2d");
var y = 0;
var x = 0;
var speedX = 30;
var speedY = 100;
var lastTime = null;
function frame(time) {
    if (lastTime != null)
        updateAnimation(Math.min(100, time - lastTime) / 1000);
    lastTime = time;
    requestAnimationFrame(frame);
}

function updateAnimation(step) {
    cx.clearRect(0, 0, 400, 400);
    cx.strokeRect(0, 0, 400, 400);
    y += step * speedY;
    x += step * speedX;
    if (x < 0 || x >= 400) {
        speedX = -speedX;
        cx.fillStyle = "blue";
    }
    if (y < 0 || y > 400) {
        speedY = -speedY;
        cx.fillStyle = "pink";
    }
    cx.beginPath();
    cx.arc(x, y, 10, 0, 7);
    cx.fill();
}

requestAnimationFrame(frame);