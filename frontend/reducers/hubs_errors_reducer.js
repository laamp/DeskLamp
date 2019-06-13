import { RECEIVE_HUB_ERRORS, CLEAR_HUB_ERRORS } from "../actions/hub_actions";

const hubsErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_HUB_ERRORS:
      return action.errors;
    case CLEAR_HUB_ERRORS:
      return [];
    default:
      return oldState;
  }
};

export default hubsErrorsReducer;
