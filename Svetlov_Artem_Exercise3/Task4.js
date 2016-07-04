function deepEqual(a, b)
{
    if (a === b)
    {
        return true;
    }

    if (a == null || typeof (a) != "object" ||
        b == null || typeof (b) != "object")
    {
        return false;
    }
    var propertiesInA = 0, propertiesInB = 0;
    for (var property in a)
    {
        propertiesInA += 1;
    }
    for (var property in b)
    {
        propertiesInB += 1;
        if (!(property in a) || !deepEqual(a[property], b[property]))
        {
            return false;
        }
    }
    return propertiesInA == propertiesInB;
}

function execTask4()
{
    document.write("Результат сравнения \"{here: {is: \"an\"}, object: 2}\" и \"{here: {is: \"an\"}, object: 2}\": " + deepEqual({ here: { is: "an" }, object: 2 }, { here: { is: "an" }, object: 2 }));
    document.write("<br>Результат сравнения \"{here: {is: \"an\"}, object: 2}\" и \"{here: 1, object: 2}\": " + deepEqual({ here: { is: "an" }, object: 2 }, { here: 1, object: 2 }));

}