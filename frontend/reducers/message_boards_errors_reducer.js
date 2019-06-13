import {
  RECEIVE_MESSAGE_BOARD_ERRORS,
  CLEAR_MESSAGE_BOARD_ERRORS
} from "../actions/message_board_actions";

const messageBoardsErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_MESSAGE_BOARD_ERRORS:
      return action.errors;
    case CLEAR_MESSAGE_BOARD_ERRORS:
      return [];
    default:
      return oldState;
  }
};

export default messageBoardsErrorsReducer;
