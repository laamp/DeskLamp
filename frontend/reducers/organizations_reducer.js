import { bindActionCreators } from "redux";

import {
  RECEIVE_ALL_ORGANIZATIONS,
  RECEIVE_ORGANIZATION
} from '../actions/organization_actions';

const organizationsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ORGANIZATION:
      return Object.assign(
        {},
        oldState,
        { [action.organization.id]: action.organization }
      );
    case RECEIVE_ALL_ORGANIZATIONS:
      return Object.assign({}, action.organizations);
    default:
      return oldState;
  }
};

export default organizationsReducer;
