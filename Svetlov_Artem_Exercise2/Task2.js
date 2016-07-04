function isEven(number)
{
    var localNumber = Math.abs(number)
    if (localNumber == 0)
    {
        return "Четное";
    }
    else if (localNumber == 1)
    {
        return "Не четное";
    }
    return isEven(localNumber - 2);
}

function isEvenValue()
{
    var number = Number(prompt("Введите число для проверки на четность: "));
    if (!isNaN(number))
    {
        document.write("Число: " + isEven(number));
    }
    else
    {
        alert("Вы ввели не число!!!");
        if (confirm("Повторить ввод?"))
        {
            isEvenValue();
        }
    }
    document.write("<br>Работа программы завершена!!!");
}