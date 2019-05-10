import * as APIUtil from '../util/hub_api_util';

export const RECEIVE_HUBS = 'RECEIVE_HUBS';

const receiveHubs = hubs => {
  return ({
    type: RECEIVE_HUBS,
    hubs: hubs
  });
};

export const getHubs = () => dispatch => {
  return (
    APIUtil.getHubs().then(hubs => dispatch(receiveHubs(hubs)))
  );
};
