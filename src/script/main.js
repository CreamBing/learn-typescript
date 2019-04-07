"use strict";
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.show = function (text) {
        var $ele = $("h1");
        $ele.text(text);
    };
    return Main;
}());
var main = new Main();
main.name = "Hello TypeScript";
main.show(main.name);
