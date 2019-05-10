import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const SIGNOUT_CURRENT_USER = 'SIGNOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveCurrentUser = currentUser => {
  return ({
    type: RECEIVE_CURRENT_USER,
    currentUser: currentUser
  });
};

const signOutCurrentUser = () => {
  return ({
    type: SIGNOUT_CURRENT_USER
  });
};

const receiveErrors = errors => {
  return ({
    type: RECEIVE_SESSION_ERRORS,
    errors: errors
  });
};

export const clearErrors = () => {
  return ({
    type: CLEAR_ERRORS,
    errors: []
  });
};

export const signIn = user => dispatch => {
  return (
    APIUtil.signIn(user)
      .then(
        user => dispatch(receiveCurrentUser(user)),
        error => dispatch(receiveErrors(error.responseJSON))
      )
  );
};

export const signUp = user => dispatch => {
  return (
    APIUtil.signUp(user)
      .then(
        user => dispatch(receiveCurrentUser(user)),
        error => dispatch(receiveErrors(error.responseJSON))
      )
  );
};

export const signOut = () => dispatch => {
  return (
    APIUtil.signOut()
      .then(
        () => dispatch(signOutCurrentUser())
      )
  );
};
