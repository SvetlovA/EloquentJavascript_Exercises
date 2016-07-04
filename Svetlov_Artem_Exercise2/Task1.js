function min(a, b)
{
    if (a < b)
    {
        return a;
    }
    else if (a > b)
    {
        return b;
    }
    else
    {
        return "Числа равны";
    }
}

function minValue()
{
    var number1 = Number(prompt("Введите первое число:"));
    var number2 = Number(prompt("Введите второе число:"));
    if (!isNaN(number1) && !isNaN(number2)) {
        document.write("Минимальное число: " + min(number1, number2));
    }
    else
    {
        alert("Вы ввели не число!!!");
        if (confirm("Повторить ввод?"))
        {
            minValue();
        }
    }
    document.write("<br>Работа программы завершена!!!");
}