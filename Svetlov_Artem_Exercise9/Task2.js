var workWithTag = function () {
    return {
        byTagName: function (node, tagName) {
            if (node.length == 0) {
                return 0;
            }
            var count = 0;
            for (var i = 0; i < node.childNodes.length; i++) {
                if (node.childNodes[i].nodeName.toLowerCase() == tagName) {
                    count++;
                }
                count += workWithTag.byTagName(node.childNodes[i], tagName);
            }
            return count;
        }
    };
}();

console.log(workWithTag.byTagName(document.body, "h1"));
// → 1
console.log(workWithTag.byTagName(document.body, "span"));
// → 3
var para = document.querySelector("p");
console.log(workWithTag.byTagName(para, "span"));