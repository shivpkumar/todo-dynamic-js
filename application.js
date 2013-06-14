$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());

  function bindEvents() {
    $('#todo').on('click', 'button, a', function(event) {
      event.preventDefault();
      var target = event.target;
      var targetClass = target.getAttribute('class');
      switch(targetClass) {
        case 'add':
          addTodo(targetClass);
          break;
        case 'delete':
          removeTodo(target);
          break;
        case 'complete':
          completeTodo(target);
          break;
        default: // do nothing
      }
    });
  }

  function addTodo(class_name) {
    var input = $('.' + class_name).prev().val();
    var todo = buildTodo(input);
    $('.todo_list').append(todo);
  }

  function removeTodo(target) {
    target.setAttribute('id','remove');
    $('#remove').closest('div').remove();
  }

  function completeTodo(target) {
    target.setAttribute('id','strike-it');
    $('#strike-it').closest('div').children('h2').css('text-decoration', 'line-through');
    target.removeAttribute('id');
  }

  function buildTodo(todoName) {
    var $todo = $(todoTemplate);
    $todo.find('h2').text(todoName);
    return $todo;
  }
  
  bindEvents();
});
