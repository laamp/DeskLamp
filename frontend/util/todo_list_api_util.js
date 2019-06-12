export const fetchTodoCollecton = id => {
  return (
    $.ajax({
      method: "GET",
      url: `api/todo_list_collections/${id}`
    })
  );
};

export const fetchAllTodoLists = collectionId => {
  return (
    $.ajax({
      method: "GET",
      url: `api/todo_list_collections/${collectionId}/todo_lists`
    })
  );
};

export const fetchTodoList = (collectionId, id) => {
  return (
    $.ajax({
      method: "GET",
      url: `api/todo_list_collections/${collectionId}/todo_lists/${id}`
    })
  );
};

export const createTodoList = (collectionId, todoList) => {
  return (
    $.ajax({
      method: "POST",
      url: `api/todo_list_collections/${collectionId}/todo_lists`,
      data: { todo_list: todoList }
    })
  )
}
