import { RECEIVE_HUBS } from '../actions/hub_actions';

const hubsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_HUBS:
      return Object.assign({}, action.hubs);
    default:
      return oldState;
  }
};

export default hubsReducer;
