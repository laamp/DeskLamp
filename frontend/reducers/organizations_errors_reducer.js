import {
  RECEIVE_ORGANIZATION_ERRORS,
  CLEAR_ORG_ERRORS
} from "../actions/organization_actions";

const organizationsErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ORGANIZATION_ERRORS:
      return action.errors;
    case CLEAR_ORG_ERRORS:
      return [];
    default:
      return oldState;
  }
};

export default organizationsErrorsReducer;
