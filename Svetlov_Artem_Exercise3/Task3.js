function arrayToList(array)
{
    var list = null;
    for (var i = array.length - 1; i >= 0; i--)
    {
        list = { value: array[i], rest: list };
    }
    return list;
}

function arrayToListRec(array, index)
{
    var list = {};
    if (array[index] == undefined)
    {
        return null;
    }
    else
    {
        list.value = array[index];
        list.rest = arrayToListRec(array, index + 1);
        return list;
    }
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

function listToArrayRec(list)
{
    var array = [];
    if (list.rest == null)
    {
        return array.concat(list.value);
    }
    else
    {
        array.push(list.value);
        array = array.concat(listToArrayRec(list.rest));
        return array;
    }
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
    else
    {
        return nth(list.rest, index - 1);
    }
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
            document.write("<br>Полученный список: " + arrayToListRec(array, 0));
            document.write("<br>Массив: " + listToArrayRec(arrayToListRec(array, 0)));
            document.write("<br>Добавлление: " + prepend(20, null));
            document.write("<br>Получение 2-ого элемента: " + nth(arrayToListRec(array, 0), 2));
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