var weekDay = function () {
    var names = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
    return {
        name: function (index) {
            if (index > 0 && index < 8) {
                return names[index - 1];
            }
            else {
                throw new Error("Такого дня недели не существует!!!");
            }
        },
        number: function (day) {
            if (names.indexOf(day) != -1) {
                return names.indexOf(day) + 1;
            }
            else {
                throw new Error("Такого дня недели не существует!!!");
            }
        }
    }
}();

try {
    var index = Number(prompt("Введите индекс дня недели:"));

    if (!isNaN(index)) {
        document.write("День недели: " + weekDay.name(index));
    }
    else {
        alert("Не верные входные данные!!!");
    }

    var day = String(prompt("Введите название дня недели:"));

    if (day.trim() != "") {
        document.write("<br>День недели: " + weekDay.number(day));
    }
    else {
        alert("Не верные входные данные!!!");
    }
} catch (e) {
    alert(e.message);
}