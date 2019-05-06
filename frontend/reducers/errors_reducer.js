import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import organizationsErrorsReducer from './organizations_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  organizations: organizationsErrorsReducer
});

export default errorsReducer;
