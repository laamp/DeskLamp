import {
  RECEIVE_EVENT_ERRORS,
  CLEAR_EVENT_ERRORS
} from "../actions/schedule_actions";

const eventsErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_EVENT_ERRORS:
      return action.errors;
    case CLEAR_EVENT_ERRORS:
      return [];
    default:
      return oldState;
  }
};

export default eventsErrorsReducer;
