import * as APIUtilSession from '../util/session_api_util';
import * as APIUtilUser from '../util/user_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_CURRENT_ORGANIZATION = 'RECEIVE_CURRENT_ORGANIZATION';
export const SIGNOUT_CURRENT_USER = 'SIGNOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const RECEIVE_USER = "RECEIVE_USER";

const receiveCurrentUser = currentUser => {
  return ({
    type: RECEIVE_CURRENT_USER,
    currentUser: currentUser
  });
};

export const receiveCurrentOrganization = organization => ({
  type: RECEIVE_CURRENT_ORGANIZATION,
  organization
});

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

const receiveUser = user => {
  return ({
    type: RECEIVE_USER,
    user: user
  });
};

export const signIn = user => dispatch => {
  return (
    APIUtilSession.signIn(user)
      .then(
        user => dispatch(receiveCurrentUser(user)),
        error => dispatch(receiveErrors(error.responseJSON))
      )
  );
};

export const signUp = user => dispatch => {
  return (
    APIUtilUser.signUp(user)
      .then(
        user => dispatch(receiveCurrentUser(user)),
        error => dispatch(receiveErrors(error.responseJSON))
      )
  );
};

export const signOut = () => dispatch => {
  return (
    APIUtilSession.signOut()
      .then(
        () => dispatch(signOutCurrentUser())
      )
  );
};

export const getUser = id => dispatch => {
  return (
    APIUtilUser.getUser(id).then(
      user => dispatch(receiveUser(user)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
  );
};

export const updateUser = (id, user) => dispatch => {
  return (
    APIUtilUser.updateUser(id, user).then(
      user => dispatch(receiveUser(user)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
  );
};
