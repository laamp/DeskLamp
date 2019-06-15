import { connect } from "react-redux";
import LoggedInHeader from "./logged_in_header";
import { signOut, clearErrors } from "../../actions/session_actions";
import { clearOrgErrors } from "../../actions/organization_actions";

const mapStateToProps = (state, { currentOrganization }) => ({
  currentOrganization
});

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut()),
  clearErrors: () => dispatch(clearErrors()),
  clearOrgErrors: () => dispatch(clearOrgErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInHeader);
