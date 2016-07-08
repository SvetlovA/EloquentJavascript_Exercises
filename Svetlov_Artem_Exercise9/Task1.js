var workWithTable = function () {
    return {
        createTable: function (inputData) {
            var table = document.createElement("table");
            var tr = document.createElement("tr");
            var ths = ["name", "height", "country"];
            for (var i = 0; i < ths.length; i++) {
                var th = document.createElement("th");
                th.appendChild(document.createTextNode(ths[i]));
                tr.appendChild(th);
            }
            table.appendChild(tr);
            for (var i = 0; i < inputData.length; i++) {
                tr = document.createElement("tr");
                for (var j = 0; j < inputData[i].length; j++) {
                    var td = document.createElement("td");
                    if (j == 1) {
                        td.setAttribute("class", "mountain-height");
                    }
                    td.appendChild(document.createTextNode(inputData[i][j]));
                    tr.appendChild(td);
                }
                table.appendChild(tr);
            }
            document.body.appendChild(table);
        }
    };
}();

workWithTable.createTable([["kilimandjaro", "100500", "Africa"], ["everest", "12345", "Russia"]]);