function trapeze(x, y, botWidth, topWidth, height) {
    var cx = document.querySelector("canvas").getContext("2d");
    var margin = (botWidth - topWidth) / 2;
    cx.beginPath();
    cx.moveTo(x, y);
    cx.lineTo(x + topWidth, y);
    cx.lineTo(x + topWidth + margin, height + y);
    cx.lineTo(x - margin, height + y);
    cx.lineTo(x, y);
    cx.stroke();
}

trapeze(30, 30, 40, 20, 30);

function rect(x, y, width, height, color) {
    var cx = document.querySelector("canvas").getContext("2d");
    cx.fillStyle = color;
    cx.rotate(Math.PI * 0.25);
    cx.fillRect(x, y, width, height);
}

//rect(140, 30, 40, 40, "red");

function teeth(x, y, lineLength, gap, count) {
    var cx = document.querySelector("canvas").getContext("2d");
    cx.beginPath();
    cx.moveTo(x, y);
    var newY = 0;
    for (var i = 0; i < count; i++) {
        newY += y + gap / 2;
        cx.lineTo(x + lineLength, newY);
        newY += y + gap / 2;
        cx.lineTo(x, newY);
    }
    cx.stroke();
}

teeth(240, 20, 30, 10, 10);

function spiral(x, y) {
    var cx = document.querySelector("canvas").getContext("2d");
    var radius = 50, xCenter = x + radius, yCenter = y + radius;
    cx.beginPath();
    cx.moveTo(xCenter, yCenter);
    for (var i = 0; i < 300; i++) {
        var angle = i * Math.PI / 30;
        var dist = radius * i / 300;
        cx.lineTo(xCenter + Math.cos(angle) * dist,
                  yCenter + Math.sin(angle) * dist);
    }
    cx.stroke();
}
spiral(340, 20);

function star(x, y) {
    var cx = document.querySelector("canvas").getContext("2d");
    var radius = 50, xCenter = x + radius, yCenter = y + radius;
    cx.beginPath();
    cx.moveTo(xCenter + radius, yCenter);
    for (var i = 1; i <= 8; i++) {
        var angle = i * Math.PI / 4;
        cx.quadraticCurveTo(xCenter, yCenter,
                            xCenter + Math.cos(angle) * radius,
                            yCenter + Math.sin(angle) * radius);
    }
    cx.fillStyle = "gold";
    cx.fill();
}
star(440, 20);