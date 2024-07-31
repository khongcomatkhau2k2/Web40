//Hiển thị ds công việc
//(Gọi api lấy ds cv + render ds cv lên giao diện)
function getTodos() {
  axios.get("https://dummyjson.com/todos?limit=5").then((response) => {
    return response.data.todos;
  });
}

function createTodos() {
  //goi api de tao cong viec
  //http post
  return axios
    .post("https://dummyjson.com/todos/add", todo)
    .then(function (response) {
      return response.data;
    });
}

function renderItem(todo) {
  const $todoList = $(".todo-list");

  const $li = $(`<li class="todo-item">
        <input type="checkbox" />
        <span class="todo-content">${item.todo}</span>
        <button class="todo-delete">Xóa</button>
        </li>`)
    .find("input")
    .prop("checked", todo.completed)
    .end()
    .appendTo($todoList);
 
}

function renderTodos(todos) {
  const $todoList = $(".todo-list");

  $todoList.empty();
  $todoList.removeClass("loading");

  if (todos.length === 0) {
    $todoList.addClass("empty");
    $todoList.append("<p>No todos found, add one</p>");
  } else {
    $todoList.removeClass("empty");
    for (const item of todos) {
      $(`<li class="todo-item">
        <input type="checkbox" />
        <span class="todo-content">${item.todo}</span>
        <button class="todo-delete">Xóa</button>
        </li>`)
        .find("input")
        .prop("checked", item.completed)
        .end()
        .appendTo($todoList);
    }
  }
}

function handleSubmit(e) {
    e.preventDefault();
    const $input = $form.find(".todo-input");

    if ($input.val().trim().length === 0) {
      return;
  } 
  const todo = {
    todo: $input.val().trim(),
    completed: false,
    id: 1

  }
}

$(function () {
  getTodos().then(renderTodos);
  $(".todo-form").submit(handleSubmit);
});

//dung them jquery de update giao dien
//put,patch la them
//delete la xoa