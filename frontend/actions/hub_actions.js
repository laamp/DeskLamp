import * as APIUtil from '../util/hub_api_util';
import { receiveOrganizationErrors } from "./organization_actions";

export const RECEIVE_HUBS = 'RECEIVE_HUBS';
export const RECEIVE_HUB = "RECEIVE_HUB";
export const DELETED_HUB = "DELETED_HUB";
export const RECEIVE_HUB_ERRORS = "RECEIVE_HUB_ERRORS";
export const CLEAR_HUB_ERRORS = "CLEAR_HUB_ERRORS";

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

const deletedHub = hub => {
  return ({
    type: DELETED_HUB,
    hubId: hub.id
  });
};

const receiveHubErrors = errors => {
  return ({
    type: RECEIVE_HUB_ERRORS,
    errors: errors
  });
};

export const clearHubErrors = () => ({
  type: CLEAR_HUB_ERRORS
});

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
      .then(hub => dispatch(deletedHub(hub)))
      .fail(err => dispatch(receiveHubErrors(err.responseJSON)))
  );
};
