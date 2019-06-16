import { connect } from 'react-redux';
import { createOrganization, requestAllOrganizations } from '../../actions/organization_actions';
import { signOut, receiveCurrentOrganization } from '../../actions/session_actions';
import OrganizationForm from './organization_form';

const mapStateToProps = state => {
  return ({
    errors: state.errors,
    organizations: state.entities.organizations,
    currentUser: state.entities.users[state.session.id]
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    setCurrentOrganization: organization => dispatch(receiveCurrentOrganization(organization)),
    createOrganization: organization => dispatch(createOrganization(organization)),
    requestUserOrgs: () => dispatch(requestAllOrganizations()),
    signOut: () => dispatch(signOut())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationForm);
