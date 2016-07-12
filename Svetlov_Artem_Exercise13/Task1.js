function code() {
    var input = document.querySelector("#input");
    var output = document.querySelector("#output")

    try {
        output.value = new Function(input.value)();
    } catch (e) {
        output.value = e.message;
    }
}