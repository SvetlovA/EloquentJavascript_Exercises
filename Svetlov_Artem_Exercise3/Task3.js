function arrayToList(array)
{
    var list = null;
    for (var i = array.length - 1; i >= 0; i--)
    {
        list = { value: array[i], rest: list };
    }
    return list;
}

function listToArray(list)
{
    var array = [];
    for (var node = list; node; node = node.rest)
    {
        array.push(node.value);
    }
    return array;
}

function prepend(value, list)
{
    return { value: value, rest: list };
}

function nth(list, index)
{
    if (!list)
    {
        return undefined;
    }
    else if (index == 0)
    {
        return list.value;
    }
    return nth(list.rest, index - 1);
}

function inputArray(count)
{
    var array = [];
    for (var i = 0; i < count; i++)
    {
        var element = Number(prompt("Введите " + i + " элемент:"));
        if (!isNaN(element))
        {
            array[i] = element;
        }
        else
        {
            throw new Error("Не верные входные данные!!!");
        }
    }
    return array;
}

function execTask3()
{
    try
    {
        var count = Number(prompt("Введите количество элементов массива(целое число):"));
        if (!isNaN(count) && count % 1 == 0)
        {
            var array = inputArray(count);
            document.write("Полученные массив: " + array);
            document.write("<br>Полученный список: " + arrayToList(array));
            document.write("<br>Массив: " + listToArray(arrayToList(array)));
            document.write("<br>Добавлление: " + prepend(20, null));
            document.write("<br>Получение 2-ого элемента: " + nth(arrayToList(array), 2));
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
}