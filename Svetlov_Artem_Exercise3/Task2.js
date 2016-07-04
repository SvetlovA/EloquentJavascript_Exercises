function reverseArray(array)
{
    var newArray = [];
    for (var i = array.length - 1; i >= 0; i--)
    {
        newArray.push(array[i]);
    }
    return newArray;
}

function reverseArrayInPlace(array)
{
    var j = 0;
    for (var i = 0; i < array.length / 2; i++)
    {
        var temp = array[i];
        array[i] = array[(array.length - 1) - i];
        array[(array.length - 1) - i] = temp;
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

function execTask2()
{
    try
    {
        var count = Number(prompt("Введите количество элементов в массиве (целое число):"));
        if (!isNaN(count) && count % 1 == 0)
        {
            var array = inputArray(count);
            document.write("Полученный массив:" + array);
            document.write("<br>Перевернутый массив(1-ый способ): " + reverseArray(array));
            reverseArrayInPlace(array);
            document.write("<br>Перевернутый массив(2-ой способ): " + array);
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