import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import organizationsReducer from './organizations_reducer';
import hubsReducer from './hubs_reducer';
import messageBoardsReducer from './message_boards_reducer';
import todoListsReducer from './todo_lists_reducer';
import eventsReducer from './events_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  organizations: organizationsReducer,
  hubs: hubsReducer,
  messageBoards: messageBoardsReducer,
  todoLists: todoListsReducer,
  events: eventsReducer
});

export default entitiesReducer;
