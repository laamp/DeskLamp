import { RECEIVE_CURRENT_USER, RECEIVE_USER } from '../actions/session_actions';

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign(
        {},
        oldState,
        { [action.currentUser.id]: action.currentUser }
      );
    case RECEIVE_USER:
      return Object.assign({}, oldState, { [action.user.id]: action.user });
    default:
      return oldState;
  }
};

export default usersReducer;
