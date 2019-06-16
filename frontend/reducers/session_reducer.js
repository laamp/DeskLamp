import {
  RECEIVE_CURRENT_USER,
  SIGNOUT_CURRENT_USER,
  RECEIVE_CURRENT_ORGANIZATION
} from '../actions/session_actions';

const nullUser = Object.freeze({
  id: null,
  organization: null
});

const sessionReducer = (oldState = nullUser, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        id: action.currentUser.id,
        organization: null
      };
    case RECEIVE_CURRENT_ORGANIZATION:
      return Object.assign(
        {}, oldState,
        { organization: action.organization }
      );
    case SIGNOUT_CURRENT_USER:
      return nullUser;
    default:
      return oldState;
  }
};

export default sessionReducer;
