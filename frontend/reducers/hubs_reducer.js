import { RECEIVE_HUBS, RECEIVE_HUB, DELETED_HUB } from '../actions/hub_actions';

const hubsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_HUBS:
      return Object.assign({}, action.hubs);
    case RECEIVE_HUB:
      return Object.assign({}, oldState, { [action.hub.id]: action.hub });
    case DELETED_HUB:
      let newState = Object.assign({}, oldState);
      delete newState[action.hubId];
      return newState;
    default:
      return oldState;
  }
};

export default hubsReducer;
