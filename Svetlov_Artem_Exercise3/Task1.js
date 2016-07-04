function range(start, end, step)
{
    var mass = [];
    var element = start;
    if ((start < end && step > 0) || (end < start && step < 0))
    {
        while (element != end)
        {
            mass.push(element);
            element += step;
        }
        mass.push(end);
    }
    else
    {
        throw new Error("Неправильно введеннын данные!!!");
    }
    return mass;
}

function sum(inputArray)
{
    var sum = 0;
    for (var i = 0; i < inputArray.length; i++)
    {
        sum += inputArray[i];
    }
    return sum;
}

function execTask1()
{
    try
    {
        var start = Number(prompt("Введите первый элемент массива:"));
        var end = Number(prompt("Введите последний элемент массива:"));
        var step = Number(prompt("Введите шаг заполнения массива (по умолчанию 1):"));
        if (!isNaN(start) && !isNaN(end) && !isNaN(step) && start % 1 == 0 && end % 1 == 0 && step % 1 == 0)
        {
            document.write("Полученный массив: " + range(start, end, step) + "<br>");
            document.write("Сумма элементов массива: " + sum(range(start, end, step)));
        }
        else
        {
            alert("Не верные входные данные!!!");
        }
    }
    catch (e)
    {
        alert(e.message);
    }
    document.write("<br>Работа программы закончена!!!");
}