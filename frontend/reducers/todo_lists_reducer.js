import {
  RECEIVE_TODO_COLLECTION,
  RECEIVE_ALL_TODO_LISTS,
  RECEIVE_TODO_LIST,
  DELETED_TODO_LIST,
  RECEIVE_ALL_TODO_TASKS,
  RECEIVE_TODO_TASK,
  DELETED_TODO_TASK
} from "../actions/todo_list_actions";

const todoListsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_TODO_COLLECTION:
      return Object.assign(
        {}, oldState, { todoListCollections: action.todo_list_collection }
      );
    case RECEIVE_ALL_TODO_LISTS:
      return Object.assign(
        {}, oldState, {
          todoLists: action.todo_lists
        }
      );
    case RECEIVE_TODO_LIST:
      return Object.assign(
        {}, oldState, {
          todoLists: {
            [action.todo_list.id]: action.todo_list
          }
        }
      );
    case DELETED_TODO_LIST:
      let newState = Object.assign({}, oldState);
      delete newState.todoLists[action.listId];
      return newState;
    case RECEIVE_ALL_TODO_TASKS:
      return Object.assign(
        {}, oldState, {
          todoListTasks: action.todo_tasks
        }
      );
    case RECEIVE_TODO_TASK:
      return Object.assign(
        {}, oldState, {
          todoListTasks: {
            [action.todo_task.id]: action.todo_task
          }
        }
      );
    case DELETED_TODO_TASK:
      let newState2 = Object.assign({}, oldState);
      delete newState2.todoListTasks[action.taskId];
      return newState2;
    default:
      return oldState;
  }
};

export default todoListsReducer;
