function triangle()
{
    var lines = Number(prompt("Введите количество строк треугольника:"));
    if (!isNaN(lines))
    {
        var str = "#";
        for (var i = 0; i < lines; i++)
        {
            document.writeln(str + "<br>");
            str += "#";
        }
    }
    else
    {
        alert("Вы ввели не число!!!");
        if (confirm("Повторить ввод?"))
        {
            triangle();
        }
    }
    document.writeln("</p>Работа программы завершена!!!</p>");
}

function fizzBuzz()
{
    var numbersCount = Number(prompt("Введите количество цифр:"));
    if (!isNaN(numbersCount))
    {
        for (var i = 1; i < numbersCount; i++)
        {
            if (i % 3 == 0)
            {
                console.log("Fizz");
            }
            else if (i % 5 == 0)
            {
                console.log("Buzz");
            }
            else {
                console.log(i);
            }
        }
    }
    else
    {
        alert("Вы ввели не число!!!");
        if (confirm("Повторить ввод?"))
        {
            fizzBuzz();
        }
    }
}

function fizzBuzz2()
{
    var numbersCount = Number(prompt("Введите количество цифр:"));
    if (!isNaN(numbersCount))
    {
        for (var i = 1; i < numbersCount; i++)
        {
            if (i % 3 == 0 || i % 5 == 0)
            {
                console.log("FizzBuzz");
            }
            else
            {
                console.log(i);
            }
        }
    }
    else
    {
        alert("Вы ввели не число!!!");
        if (confirm("Повторить ввод?"))
        {
            fizzBuzz();
        }
    }
}

function board()
{
    var width = Number(prompt("Введите ширину доски:"));
    var height = Number(prompt("Введите высоту оски:"));
    if (!isNaN(width) && !isNaN(height))
    {
        var str;
        for (var i = 0; i < height; i++)
        {
            if ((i + 1) % 2 == 0)
            {
                str = "&nbsp#";
            }
            else
            {
                str = "#&nbsp";
            }
            for (var j = 0; j < width; j++)
            {
                document.write(str);
            }
            document.write("<br>");
        }
    }
    else
    {
        alert("Вы ввели не число!!!");
        if (confirm("Повторить ввод?"))
        {
            board();
        }
    }
    document.writeln("</p>Работа программы завершена!!!</p>");
}