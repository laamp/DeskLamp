import * as APIUtil from "../util/todo_list_api_util";

export const RECEIVE_TODO_COLLECTION = "RECEIVE_TODO_COLLECTION";
export const RECEIVE_ALL_TODO_LISTS = "RECEIVE_ALL_TODO_LISTS";
export const RECEIVE_TODO_LIST = "RECEIVE_TODO_LIST";
export const DELETED_TODO_LIST = "DELETED_TODO_LIST";
export const RECEIVE_ALL_TODO_TASKS = "RECEIVE_ALL_TODO_TASKS";
export const RECEIVE_TODO_TASK = "RECEIVE_TODO_TASK";
export const DELETED_TODO_TASK = "DELETED_TODO_TASK";
export const RECEIVE_TODO_ERRORS = "RECEIVE_TODO_ERRORS";
export const CLEAR_TODO_ERRORS = "CLEAR_TODO_ERRORS";

const receiveTodoCollection = collection => ({
  type: RECEIVE_TODO_COLLECTION,
  todo_list_collection: collection
});

const receiveAllTodoLists = lists => ({
  type: RECEIVE_ALL_TODO_LISTS,
  todo_lists: lists
});

const receiveTodoList = list => ({
  type: RECEIVE_TODO_LIST,
  todo_list: list
});

const deletedTodoList = list => ({
  type: DELETED_TODO_LIST,
  listId: list.id
});

const receiveAllTodoTasks = tasks => ({
  type: RECEIVE_ALL_TODO_TASKS,
  todo_tasks: tasks
});

const receiveTodoTask = task => ({
  type: RECEIVE_TODO_TASK,
  todo_task: task
});

const deletedTodoTask = task => ({
  type: DELETED_TODO_TASK,
  taskId: task.id
});

const receiveTodoErrors = errors => ({
  type: RECEIVE_TODO_ERRORS,
  errors: errors
});

export const clearTodoErrors = () => ({
  type: CLEAR_TODO_ERRORS
});

export const fetchTodoCollection = id => dispatch => (
  APIUtil.fetchTodoCollecton(id)
    .then(collection => dispatch(receiveTodoCollection(collection)))
    .fail(err => dispatch(receiveTodoErrors(err)))
);

export const fetchAllTodoLists = collectionId => dispatch => (
  APIUtil.fetchAllTodoLists(collectionId)
    .then(lists => dispatch(receiveAllTodoLists(lists)))
    .fail(err => dispatch(receiveTodoErrors(err)))
);

export const fetchTodoList = (collectionId, id) => dispatch => (
  APIUtil.fetchTodoList(collectionId, id)
    .then(list => dispatch(receiveTodoList(list)))
    .fail(err => dispatch(receiveTodoErrors(err)))
);

export const createTodoList = (collectionId, todoList) => dispatch => (
  APIUtil.createTodoList(collectionId, todoList)
    .then(list => dispatch(receiveTodoList(list)))
    .fail(err => dispatch(receiveTodoErrors(err)))
);

export const updateTodoList = (collectionId, id, todoList) => dispatch => (
  APIUtil.updateTodoList(collectionId, id, todoList)
    .then(list => dispatch(receiveTodoList(list)))
    .fail(err => dispatch(receiveTodoErrors(err)))
);

export const deleteTodoList = (collectionId, id) => dispatch => (
  APIUtil.deleteTodoList(collectionId, id)
    .then(list => dispatch(deletedTodoList(list)))
    .fail(err => dispatch(receiveTodoErrors(err)))
);

export const fetchAllTasks = (collectionId, listId) => dispatch => (
  APIUtil.fetchAllTasks(collectionId, listId)
    .then(tasks => dispatch(receiveAllTodoTasks(tasks)))
    .fail(err => dispatch(receiveTodoErrors(err)))
);

export const fetchTask = (collectionId, listId, id) => dispatch => (
  APIUtil.fetchTask(collectionId, listId, id)
    .then(task => dispatch(receiveTodoTask(task)))
    .fail(err => dispatch(receiveTodoErrors(err)))
);

export const createTask = (collectionId, listId, task) => dispatch => (
  APIUtil.createTask(collectionId, listId, task)
    .then(task => dispatch(receiveTodoTask(task)))
    .fail(err => dispatch(receiveTodoErrors(err)))
);

export const updateTask = (collectionId, listId, id, task) => dispatch => (
  APIUtil.updateTask(collectionId, listId, id, task)
    .then(task => dispatch(receiveTodoTask(task)))
    .fail(err => dispatch(receiveTodoErrors(err)))
);

export const deleteTask = (collectionId, listId, id) => dispatch => (
  APIUtil.deleteTask(collectionId, listId, id)
    .then(task => dispatch(deletedTodoTask(task)))
    .fail(err => dispatch(receiveTodoErrors(err)))
);
