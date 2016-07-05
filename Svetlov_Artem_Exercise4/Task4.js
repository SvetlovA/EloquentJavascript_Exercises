function every(array, func) {
    if (array.every(func)) {
        return true;
    }
    else {
        return false;
    }
}

function every2(array, func) {
    for (var i = 0; i < array.length; i++) {
        if (!func(array[i])) {
            return false;
        }
    }
    return true;
}

function some(array, func) {
    if (array.some(func)) {
        return true;
    }
    else {
        return false;
    }
}

function some2(array, func) {
    for (var i = 0; i < array.length; i++) {
        if (func(array[i])) {
            return true;
        }
    }
    return false;
}

function exeTask4() {
    document.write("Every для выражения \"[NaN, NaN, NaN], isNaN\"(1-ый способ): " + every([NaN, NaN, NaN], isNaN));
    document.write("<br>Every для выражения \"[NaN, NaN, NaN], isNaN\"(2-ой способ): " + every2([NaN, NaN, NaN], isNaN));
    document.write("<br>Every для выражения \"[NaN, NaN, 4], isNaN\"(1-ый способ): " + every([NaN, NaN, 4], isNaN));
    document.write("<br>Every для выражения \"[NaN, NaN, 4], isNaN\"(2-ой способ): " + every2([NaN, NaN, 4], isNaN));

    document.write("<br>Some для выражения \"[NaN, 3, 4], isNaN\"(1-ый способ): " + some([NaN, 3, 4], isNaN));
    document.write("<br>Some для выражения \"[NaN, 3, 4], isNaN\"(2-ой способ): " + some2([NaN, 3, 4], isNaN));
    document.write("<br>Some для выражения \"[2, 3, 4], isNaN\"(1-ый способ): " + some([2, 3, 4], isNaN));
    document.write("<br>Some для выражения \"[2, 3, 4], isNaN\"(2-ой способ): " + some2([2, 3, 4], isNaN));
}