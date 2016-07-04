function countChar(inputString, inputChar)
{
    var kol = 0;
    for (var i = 0; i < inputString.length; i++)
    {
        if (inputString.charAt(i).toLowerCase() == inputChar.toLowerCase())
        {
            kol++;
        }
    }
    return kol;
}

function countCharValue()
{
    var inputString = String(prompt("Введите строку:"));
    var inputChar = String(prompt("Введите символ:"));
    if (inputString.trim() != "" && inputChar.trim().length == 1)
    {
        document.write("Количество подходящих символов: " + countChar(inputString.trim(), inputChar.trim()));
    }
    else
    {
        alert("Вы ввели пустую строку!!!");
        if (confirm("Повторить ввод?"))
        {
            countCharValue();
        }
    }
    document.write("<br>Работа программы завершена!!!");
}