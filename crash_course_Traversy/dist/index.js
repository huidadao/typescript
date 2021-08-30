// Basic Types
var id = 5;
var company = 'Hui Media';
var isPublished = true;
var x = 'Hello';
var ids = [1, 2, 3, 4, 5];
var arr = [1, true, 'Hello'];
// Tuple
var person = [1, 'Alex', true];
// Tuple Array
var employee;
employee = [
    [1, 'Alex'],
    [2, 'John'],
    [3, 'Brad'],
];
// Union
var pid;
pid = '22';
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
var user = {
    id: 1,
    name: 'John'
};
// Type Assertion
var cid = 1;
// let customerId = <number>cid
var customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
// Void
function log(message) {
    console.log(message);
}
var user1 = {
    id: 1,
    name: 'John'
};
var add = function (x, y) { return x + y; };
var sub = function (x, y) { return x - y; };
// Classes
var Person = /** @class */ (function () {
    function Person() {
        console.log(123);
    }
    return Person;
}());
var brad = new Person();
var mike = new Person();
