/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/classes/TodoItem.ts
var TodoItem = /** @class */ (function () {
    function TodoItem(name, complete, dueDate, listType, labels, filter) {
        if (name === void 0) { name = ''; }
        if (complete === void 0) { complete = false; }
        if (dueDate === void 0) { dueDate = ''; }
        if (listType === void 0) { listType = ''; }
        if (labels === void 0) { labels = ['']; }
        if (filter === void 0) { filter = ''; }
        this.name = name;
        this.complete = complete;
        this.dueDate = dueDate;
        this.listType = listType;
        this.labels = labels;
        this.filter = filter;
    }
    TodoItem.prototype.setName = function (name) {
        this.name = name;
    };
    TodoItem.prototype.setDueDate = function (dueDate) {
        this.dueDate = dueDate;
    };
    TodoItem.prototype.setListType = function (listType) {
        this.listType = listType;
    };
    TodoItem.prototype.setLabels = function (labels) {
        this.labels = labels;
    };
    TodoItem.prototype.setFilter = function (filter) {
        this.filter = filter;
    };
    TodoItem.prototype.toggleComplete = function () {
        this.complete = !this.complete;
    };
    TodoItem.prototype.getName = function () {
        return this.name;
    };
    TodoItem.prototype.getDueDate = function () {
        return this.dueDate;
    };
    TodoItem.prototype.getListType = function () {
        return this.listType;
    };
    TodoItem.prototype.getLabels = function () {
        return this.labels;
    };
    TodoItem.prototype.isComplete = function () {
        return this.complete;
    };
    return TodoItem;
}());
/* harmony default export */ const classes_TodoItem = (TodoItem);

;// CONCATENATED MODULE: ./src/index.ts

var addTaskForm = document.querySelector('.addTaskForm');
var displayFormButton = document.querySelector('.displayFormButton');
var allTasks = [];
var handleAddTask = function () {
};
var displayAddTaskForm = function () {
    console.log('toggle');
    addTaskForm.classList.toggle('hidden');
    displayFormButton.classList.toggle('hidden');
};
displayFormButton.addEventListener('click', displayAddTaskForm);
var task = new classes_TodoItem('new task', false, '', '', [''], '');
allTasks.push(task);
console.log(task);
console.log('hello fag');

/******/ })()
;