import { connect } from 'react-redux';
import { signOut, clearErrors } from '../../actions/session_actions';
import { fetchHubs } from '../../actions/hub_actions';
import OrganizationHome from './organization_home';

const mapStateToProps = (state, { match }) => {
  return ({
    currentOrganization: state.entities.organizations[match.params.organizationId],
    hubs: state.entities.hubs,
    errors: state.errors.organizations
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchHubs: orgId => dispatch(fetchHubs(orgId)),
    signOut: () => dispatch(signOut()),
    clearErrors: () => dispatch(clearErrors())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationHome);
