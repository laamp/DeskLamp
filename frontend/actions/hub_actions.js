import * as APIUtil from '../util/hub_api_util';
import { receiveOrganizationErrors } from "./organization_actions";

export const RECEIVE_HUBS = 'RECEIVE_HUBS';

const receiveHubs = hubs => {
  return ({
    type: RECEIVE_HUBS,
    hubs: hubs
  });
};

export const getHubs = orgId => dispatch => {
  return (
    APIUtil.getHubs(orgId)
      .then(hubs => dispatch(receiveHubs(hubs)))
      .fail(errors => dispatch(receiveOrganizationErrors(errors.responseJSON)))
  );
};
