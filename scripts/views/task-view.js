'use strict';

var app = app || {};

(function (module) {
  const taskView = {};

  function reset() {
    $('.container').hide();
    $('.navigation').slideDown(350);
  }

  taskView.initIndexPage = function (ctx) {
    reset();
    console.log('in init index');
    $('.task-view').show();
    $('#task-list').empty();
    app.Task.all.map(task => $('#task-list').append(task.toHtml()));
  }

  taskView.initAddForm = function () {
    reset();
    $('.add-view').show();
    $('#add-form').on('submit', function (event) {
      event.preventDefault();

      // TODO: capture the input from the user
      // and create a new instance of a task
      let task = {
        title: event.target.title.value,
        description: event.target.description.value,
        category: event.target.category.value,
        contact: event.target.contact.value,
        status: event.target.status.value
      }
      module.Task.createTask(task);
    })
  }

  module.taskView = taskView;
})(app)