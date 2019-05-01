import { combineReducers } from 'redux';
import entities from './entitiesReducer';
import session from './session_reducer';
import errors from './errorsReducer';

const rootReducer = combineReducers({
  entities: entities,
  session: session,
  errors: errors
});

export default rootReducer;
