function MultiplicatorUnitFailure(message) {
    Error.call(this);
    this.message = message;
    this.name = "MultiplicatorUnitFailure";
}

function primitiveMultiply(a, b) {
    if (Math.random() < 0.5)
        return a * b;
    else
        throw new MultiplicatorUnitFailure("Неповезло!!!");
}

function reliableMultiply(a, b) {
    try {
        return primitiveMultiply(a, b);
    } catch (e) {
        console.log(e.message);
        return reliableMultiply(a, b);
    }
}

function execTask1() {
    var a = Number(prompt("Введите 1-ый множитель:"));
    var b = Number(prompt("Введите 2-ой множитель:"));

    if (!isNaN(a) && !isNaN(b)) {
        document.write("Резульат умножения: " + reliableMultiply(a, b));
    }
    else {
        alert("Вы ввели некорректные исходные данные!!!");
    }
    document.write("<br>Работа программы завершена!!!");
}