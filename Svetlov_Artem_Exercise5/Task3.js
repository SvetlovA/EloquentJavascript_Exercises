function Collection() {
    var array = [];

    this.setArray = function (arr) {
        array = arr;
    }

    this.getArray = function () {
        return array;
    }

    this.getElement = function (i) {
        return array[i];
    }

    this.length = function () {
        return array.length;
    }
}

function ArraySeq(array) {
    Collection.call(this);
    this.setArray(array);
}

function RangeSeq(start, end) {
    Collection.call(this);

    function range(a, b, step) {
        var arr = [];
        var current = a;
        while (current <= b) {
            arr.push(current);
            current += step;
        }
        return arr;
    }

    this.setArray(range(start, end, 1));
}

function logFive(obj) {
    document.write("Первые пять элементов массива: ");
    var length = (obj.length() < 5) ? obj.length() : 5;
    for (var i = 0; i < length; i++) {
        document.write("<br>" + (i + 1) + " элемент = " + obj.getElement(i));
    }
}

function inputArray(count) {
    var array = [];
    for (var i = 0; i < count; i++) {
        array.push(i + 1);
    }
    return array;
}

function execTask3() {
    var count = Number(prompt("Введите длину массива: "));
    if (!isNaN(count) && count % 1 == 0) {
        var myCollection1 = new ArraySeq(inputArray(count));
        document.write("Работа с первым массивом:<br>");
        logFive(myCollection1);
    }
    else {
        alert("Вы ввели пустое или не целое значение!!!");
    }
    var start = Number(prompt("Введите начальный элемент массива:"));
    var end = Number(prompt("Введите конечный элемент массива:"));
    if (!isNaN(start) && !isNaN(end)) {
        var myCollection2 = new RangeSeq(start, end);
        document.write("<br>Работа со вторым массивом:<br>");
        logFive(myCollection2);
    }
    else {
        alert("Вы ввели пустое значение!!!");
    }
    document.write("<br>Работа программы завершена!!!");
}