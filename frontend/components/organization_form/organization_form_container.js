import { connect } from 'react-redux';
import { createOrganization } from '../../actions/organization_actions';
import OrganizationForm from './organization_form';

const mapStateToProps = state => {
  return ({
    errors: state.errors,
    organizations: state.organizations
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    createOrganization: organization => dispatch(createOrganization(organization))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationForm);
