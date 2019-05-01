import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import sessionReducer from './session_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer
});

export default entitiesReducer;
