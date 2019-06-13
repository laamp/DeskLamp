import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import organizationsErrorsReducer from './organizations_errors_reducer';
import hubsErrorsReducer from './hubs_errors_reducer';
import messageBoardsErrorsReducer from './message_boards_errors_reducer';
import todoListsErrorsReducer from './todo_lists_errors_reducer';
import eventsErrorsReducer from './events_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  organizations: organizationsErrorsReducer,
  hubs: hubsErrorsReducer,
  messageBoards: messageBoardsErrorsReducer,
  todoLists: todoListsErrorsReducer,
  events: eventsErrorsReducer
});

export default errorsReducer;
