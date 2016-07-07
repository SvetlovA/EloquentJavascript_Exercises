function change(text) {
    var words = text.split(" ");
    var newText = "";
    words.forEach(function (word) {
        if (word.match(/'\w+'/)) {
            newText += word.replace(/'/g, "\"") + " ";
        }
        else {
            newText += word + " ";
        }
    })
    return newText;
}

function execTask2() {
    var text = String(prompt("Введите текст:"));

    if (text.trim() != "") {
        document.write(change(text.trim()));
    }
    else {
        alert("Вы ввели не верные исходные данные");
    }
    document.write("<br>Работа программы заершена!!!");
}