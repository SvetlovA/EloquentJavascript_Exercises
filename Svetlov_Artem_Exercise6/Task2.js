var box = {
    locked: true,
    unlock: function () { this.locked = false; },
    lock: function () { this.locked = true; },
    _content: [],
    get content() {
        if (this.locked) throw new Error("Заперто!");
        return this._content;
    }
};

function withBoxUnlocked(body) {
    try {
        box.locked = false;
        document.write("<br>Открыл сундук.");
        body();
        document.write("<br>Положил " + box.content + ".");
    } catch (e) {
        document.write("<br>" + e.message);
    }
    finally {
        box.locked = true;
        document.write("<br>Закрыл сундук.");
    }
}

function locked(lock) {
    if (lock == true) {
        return "заперт.";
    }
    else {
        return "открыт.";
    }
}

function execTask2() {
    withBoxUnlocked(function () {
        box.content.push("золотишко");
    });

    try {
        withBoxUnlocked(function () {
            throw new Error("Пираты на горизонте! Отмена!");
        });
    } catch (e) {
        document.write("<br>" + e.message);
    }
    document.write("<br>Сундук " + locked(box.locked));
    document.write("<br>Работа программы завершена!!!")
}