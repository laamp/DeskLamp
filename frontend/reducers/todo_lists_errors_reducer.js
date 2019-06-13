import {
  RECEIVE_TODO_ERRORS,
  CLEAR_TODO_ERRORS
} from "../actions/todo_list_actions";

const todoListsErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_TODO_ERRORS:
      return action.errors;
    case CLEAR_TODO_ERRORS:
      return [];
    default:
      return oldState;
  }
};

export default todoListsErrorsReducer;
