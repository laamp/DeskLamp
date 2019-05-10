import { connect } from 'react-redux';
import { requestOrganization } from '../../actions/organization_actions';
import { signOut } from '../../actions/session_actions';
import { getHubs } from '../../actions/hub_actions';
import OrganizationHome from './organization_home';

const mapStateToProps = (state, { match }) => {
  return ({
    currentOrganization: state.entities.organizations[match.params.organizationId],
    hubs: state.entities.hubs
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    //get users
    //get hubs
    getHubs: () => dispatch(getHubs()),
    signOut: () => dispatch(signOut())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationHome);
