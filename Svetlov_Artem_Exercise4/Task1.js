function convolutionArray(array)
{
    return array.reduce(function (arr, currentarr)
    {
        return arr.concat(currentarr);
    }, []);
}

function outputArray(array)
{
    document.write("[");
    array.forEach(function (item)
    {
        document.write("[" + item + "]")
    });
    document.write("]");
}

function execTask1()
{
    var arrays = [[1, 2, 3], [4, 5], [6]];
    document.write("Исходный массив: ");
    outputArray(arrays);
    document.write("<br>Полученный массив в результате слияния: " + convolutionArray(arrays));
}