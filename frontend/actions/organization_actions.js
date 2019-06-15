import * as APIUtil from '../util/organization_api_util';

export const RECEIVE_ALL_ORGANIZATIONS = 'RECEIVE_ALL_ORGANIZATIONS';
export const RECEIVE_ORGANIZATION = 'RECEIVE_ORGANIZATION';
export const SET_CURRENT_ORGANIZATION = 'SET_CURRENT_ORGANIZATION';
export const RECEIVE_ORGANIZATION_ERRORS = 'RECEIVE_ORGANIZATION_ERRORS';
export const CLEAR_ORG_ERRORS = 'CLEAR_ORG_ERRORS';

const receiveAllOrganizations = organizations => {
  return ({
    type: RECEIVE_ALL_ORGANIZATIONS,
    organizations: organizations
  });
};

const receiveOrganization = organization => {
  return ({
    type: RECEIVE_ORGANIZATION,
    organization: organization
  });
};

export const receiveOrganizationErrors = errors => {
  return ({
    type: RECEIVE_ORGANIZATION_ERRORS,
    errors: errors
  });
};

export const clearOrgErrors = () => ({
  type: CLEAR_ORG_ERRORS
});

export const requestAllOrganizations = () => dispatch => {
  return (
    APIUtil.fetchOrganizations()
      .then(orgs => dispatch(receiveAllOrganizations(orgs)))
  );
};

export const requestOrganization = id => dispatch => {
  return (
    APIUtil.fetchOrganization(id)
      .then(org => dispatch(receiveOrganization(org)))
  );
};

export const createOrganization = organization => dispatch => {
  return (
    APIUtil.createOrganization(organization)
      .then(org => dispatch(receiveOrganization(org)))
      .fail(errors => dispatch(receiveOrganizationErrors(errors.responseJSON)))
  );
};
