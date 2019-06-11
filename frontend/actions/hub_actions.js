import * as APIUtil from '../util/hub_api_util';
import { receiveOrganizationErrors } from "./organization_actions";

export const RECEIVE_HUBS = 'RECEIVE_HUBS';

const receiveHubs = hubs => {
  return ({
    type: RECEIVE_HUBS,
    hubs: hubs
  });
};

export const fetchHubs = orgId => dispatch => {
  return (
    APIUtil.fetchHubs(orgId)
      .then(hubs => dispatch(receiveHubs(hubs)))
      .fail(errors => dispatch(receiveOrganizationErrors(errors.responseJSON)))
  );
};
