var number = /^(\+|\-)?\d+\.?(\d+)?(e\+|e-|e)?(\d+)?$/i;
             ///^(\+|-|)(\d+(\.\d*)?|\.\d+)([eE](\+|-|)\d+)?$/;
             ///^(\+|\-)?\d+\.?(\d+)?(e\+|e-|e)?(\d+)?$/i;

function execTask3() {
    ["1", "-1", "+15", "1.55", "5", "5.", "1.3e2", "1E-4",
 "1e+12"].forEach(function (s) {
     if (!number.test(s)) {
         document.write("<br><span class=\"no-correct\">Не нашла '" + s + "'</span>");
     }
     else {
         document.write("<br><span class=\"correct\">Нашла '" + s + "'</span>");
     }
 });
    ["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5",
     "."].forEach(function (s) {
         if (number.test(s)) {
             document.write("<br><span class=\"no-correct\">Неправильно принято '" + s + "'</span>");
         }
         else {
             document.write("<br><span class=\"correct\">Правильно приянто '" + s + "'</span>");
         }
     });
}