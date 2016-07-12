function get(url, types) {
    types.forEach(function (type) {
        var req = new XMLHttpRequest();
        req.open("GET", url, false);
        req.setRequestHeader("accept", type);
        req.send(null);
        document.write(req.responseText + "<br>");
    });
}

get("http://eloquentjavascript.net/author", ["text/plain", "text/html", "application/json"]);