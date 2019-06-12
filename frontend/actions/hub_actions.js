import * as APIUtil from '../util/hub_api_util';
import { receiveOrganizationErrors } from "./organization_actions";

export const RECEIVE_HUBS = 'RECEIVE_HUBS';
export const RECEIVE_HUB = "RECEIVE_HUB";
export const DELETED_HUB = "DELETED_HUB";

const receiveHubs = hubs => {
  return ({
    type: RECEIVE_HUBS,
    hubs: hubs
  });
};

const receiveHub = hub => {
  return ({
    type: RECEIVE_HUB,
    hub: hub
  });
};

const deletedHub = () => {
  return ({
    type: DELETED_HUB
  });
};

export const fetchHubs = orgId => dispatch => {
  return (
    APIUtil.fetchHubs(orgId)
      .then(hubs => dispatch(receiveHubs(hubs)))
      .fail(errors => dispatch(receiveOrganizationErrors(errors.responseJSON)))
  );
};

export const fetchHub = id => dispatch => {
  return (
    APIUtil.fetchHub(id)
      .then(hub => dispatch(receiveHub(hub)))
      .fail(err => dispatch(receiveHubErrors(err.responseJSON)))
  );
};

export const createHub = hub => dispatch => {
  return (
    APIUtil.createHub(hub)
      .then(hub => dispatch(receiveHub(hub)))
      .fail(err => dispatch(receiveHubErrors(err.responseJSON)))
  );
};

export const updateHub = (id, hub) => dispatch => {
  return (
    APIUtil.updateHub(id, hub)
      .then(hub => dispatch(receiveHub(hub)))
      .fail(err => dispatch(receiveHubErrors(err.responseJSON)))
  );
};

export const destroyHub = id => dispatch => {
  return (
    APIUtil.destroyHub(id)
      .then(() => dispatch(deletedHub()))
      .fail(err => dispatch(receiveHubErrors(err.responseJSON)))
  );
};
