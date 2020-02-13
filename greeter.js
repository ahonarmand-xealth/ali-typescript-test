"use strict";
exports.__esModule = true;
var module1_1 = require("src/module1");
function greeter(person) {
    return module1_1.x + ", " + person;
}
var user = "Jane User";
console.log(greeter(user));
