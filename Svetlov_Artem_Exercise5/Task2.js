function repeat(string, times) {
    var result = "";
    for (var i = 0; i < times; i++)
        result += string;
    return result;
}

function TextCell(text) {
    if (text != undefined) {
        this.text = text.split("\n");
    }
    else {
        this.text = text;
    }

    this.draw = function (width, height) {
        var result = [];
        for (var i = 0; i < height; i++) {
            var line = this.text[i] || "";
            result.push(line + repeat(" ", width - line.length));
        }
        return result;
    };
}
TextCell.prototype.minWidth = function () {
    return this.text.reduce(function (width, line) {
        return Math.max(width, line.length);
    }, 0);
};
TextCell.prototype.minHeight = function () {
    return this.text.length;
};

function StretchCell(inner, width, height) {
    TextCell.call(this, inner.text[0]);
    var _inner = inner;
    var _width = width;
    var _height = height;

    this.getInner = function () {
        return _inner;
    }

    this.getWidth = function () {
        return _width;
    }

    this.getHeight = function () {
        return _height;
    }

    this.minWidth = function () {
        return Math.min(this.getWidth(), this.getInner().minWidth());
    }

    this.minHeight = function () {
        return Math.min(this.getHeight(), this.getInner().minHeight())
    }
}

function execTask2() {
    var text = String(prompt("Введите текст ячейки:"));
    var width = Number(prompt("Введите ширину:"));
    var height = Number(prompt("Введите высоту: "));
    if (!isNaN(width) && !isNaN(height)) {
        var sc = new StretchCell(new TextCell(text), width, height);
        document.write("Минимальная ширина: " + sc.minWidth());
        // → 3
        document.write("<br>Минимальная высота: " + sc.minHeight());
        // → 2
        document.write("<br>Вывод: " + sc.draw(3, 2));
        // → ["abc", "   "]
    }
    else {
        alert("Введено пусто езначение");
    }
    document.write("<br>Работа программы завершена!!!");
}