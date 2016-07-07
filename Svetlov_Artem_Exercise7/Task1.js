function verify(regexp, yes, no) {
    // Ignore unfinished exercises
    if (regexp.source == "...") return;
    yes.forEach(function (s) {
        if (!regexp.test(s)) {
            document.write("<br><span class=\"no-correct\">Не нашлось '" + s + "'</span>");
        }
        else {
            document.write("<br><span class=\"correct\">Нашлось '" + s + "'</span>");
        }
    });
    no.forEach(function (s) {
        if (regexp.test(s)) {
            document.write("<br><span class=\"no-correct\">Неожиданное вхождение '" + s + "'</span>");
        }
        else {
            document.write("<br><span class=\"correct\">Не нашлось '" + s + "'</span>");
        }
    });
}

function execTask1() {
    verify(/\w+ (ca).+/,
       ["my car", "bad cats"],
       ["camper", "high art"]);

    verify(/(pr?op)/,
           ["pop culture", "mad props"],
           ["plop"]);

    verify(/ferr(et|y|ari)/,
           ["ferret", "ferry", "ferrari"],
           ["ferrum", "transfer A"]);

    verify(/(ious)\b/,
           ["how delicious", "spacious room"],
           ["ruinous", "consciousness"]);

    verify(/^.+\.$/,
           ["bad punctuation ."],
           ["escape the dot"]);

    verify(/hottentottententen/,
           ["hottentottententen"],
           ["no", "hotten totten tenten"]);

    verify(/\b[a-df-z]+\b/i,
           ["red platypus", "wobbling nest"],
           ["earth bed", "learning ape"]);
}