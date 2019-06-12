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

export const updateTodoList = (collectonId, id, todoList) => {
  return (
    $.ajax({
      method: "PATCH",
      url: `api/todo_list_collections/${collectonId}/todo_lists/${id}`,
      data: { todo_list: todoList }
    })
  );
};

export const deleteTodoList = (collectionId, id) => {
  return (
    $.ajax({
      method: "DELETE",
      url: `api/todo_list_collectons/${collectionId}/todo_lists/${id}`
    })
  );
};
