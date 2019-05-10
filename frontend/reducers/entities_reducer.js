import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import organizationsReducer from './organizations_reducer';
import hubsReducer from './hubs_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  organizations: organizationsReducer,
  hubs: hubsReducer
});

export default entitiesReducer;
