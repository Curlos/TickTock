/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
var TodoItem = /** @class */ (function () {
    function TodoItem(name, complete, dueDate, listType) {
        this.name = name;
        this.complete = complete;
        this.dueDate = dueDate;
        this.listType = listType;
    }
    TodoItem.prototype.setName = function (name) {
        this.name = name;
    };
    TodoItem.prototype.toggleComplete = function () {
        this.complete = !this.complete;
    };
    return TodoItem;
}());
console.log('hello');

/******/ })()
;