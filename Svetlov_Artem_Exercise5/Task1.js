function Vector(x, y) {
    var _x = x;
    var _y = y;

    this.getX = function () {
        return _x;
    }

    this.setX = function (X) {
        _x = X;
    }

    this.getY = function () {
        return _y;
    }

    this.setY = function (Y) {
        _y = Y;
    }

    this.plus = function (obj) {
        this.setX(this.getX() + obj.getX());
        this.setY(this.getY() + obj.getY());
        return new Vector(this.getX(), this.getY());
    }

    this.minus = function (obj) {
        this.setX(this.getX() - obj.getX());
        this.setY(this.getY() - obj.getY());
        return new Vector(this.getX(), this.getY());
    }

    this.length = function () {
        return Math.sqrt(this.getX() * this.getX() + this.getY() * this.getY());
    }

    Vector.prototype.toString = function () {
        return "Vector { x: " + this.getX() + " y: " + this.getY() + " }";
    }
}

function execTask1() {
    var x1 = Number(prompt("Введите координату X для первого вектора: "));
    var y1 = Number(prompt("Введите координату Y для первого вектора: "));

    var x2 = Number(prompt("Введите координату X для второго вектора: "));
    var y2 = Number(prompt("Введите координату Y для второго вектора: "));

    if (!isNaN(x1) && !isNaN(y1) && !isNaN(x2) && !isNaN(y2)) {
        var vector1 = new Vector(x1, y1);
        var vector2 = new Vector(x2, y2);
        document.write("Первый вектор: " + vector1);
        document.write("<br>Второй вектор: " + vector2);
        document.write("<br>Сложение векторов 1-ый + 2-ой: " + vector1.plus(vector2));
        document.write("<br>Значение первого вектора стало: " + vector1);
        document.write("<br>Вычитание векторов 1-ый - 2-ой: " + vector1.minus(vector2));
        document.write("<br>Значение первого вектора стало: " + vector1);
        document.write("<br>Длина первого вектора: " + vector1.length());
    }
}