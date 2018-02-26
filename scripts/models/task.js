'use strict';

var app = {};
// var __API_URL__ = 'http://localhost:3000';
var __API_URL__ = 'https://ag-vs-booklist.herokuapp.com';

(function (module) {
  function errorCallback(err) {
    console.error(err);
    module.errorView.initErrorPage(err);
  }

  function Task(taskObject) {
    Object.keys(taskObject).forEach(key => this[key] = taskObject[key]);
  }

  Task.prototype.toHtml = function () {
    let template = Handlebars.compile($('#task-template').text());
    return template(this);
  }

  Task.all = [];

  Task.loadAll = rows => {
    Task.all = rows.sort((a, b) => b.title - a.title).map(task => new Task(task));
  }

  Task.fetchAll = callback =>
    $.get(`${__API_URL__}/tasks`)
      .then(Task.loadAll)
      .then(callback)
      .catch(errorCallback);

  module.Task = Task;
})(app)
