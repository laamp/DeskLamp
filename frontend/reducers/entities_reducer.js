import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import organizationsReducer from './organizations_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  organizations: organizationsReducer
});

export default entitiesReducer;
