'use strict';

var app = {};
var __API_URL__ = 'http://localhost:3000';

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
    Task.all = rows.map(task => new Task(task));
  }

  Task.fetchAll = callback =>
    $.get(`${__API_URL__}/tasks`)
      .then(Task.loadAll)
      .then(callback)
      .catch(errorCallback);

  Task.createTask = task =>
    // TODO: make an AJAX request to create a new task,
    // redirect to home page,
    // and handle errors

    module.Task = Task;
})(app)