(function () {
    var terms = [];
    for (var name in window) {
        terms.push(name);
    }

    var text = document.querySelector("#field");
    var suggestions = document.querySelector("#suggestions");

    text.addEventListener("input", function () {
        var value = text.value;
        clear(suggestions);

        terms.forEach(function (term) {
            if (value == term.substr(0, value.length) && value != "") {
                var node = document.createElement("div");
                node.textContent = term;
                node.addEventListener("click", function () {
                    text.value = node.textContent;
                });
                suggestions.appendChild(node);
        }
        });
    });

}());

function clear(node) {
    while (node.firstChild) {
        suggestions.removeChild(node.firstChild);
    }
}