import { connect } from 'react-redux';
import { signOut } from "../../actions/session_actions";
import Greeting from "./greeting";

const mapStateToProps = ({ session, entities: { users } }) => {
  return ({
    currentUser: users[session.id]
  });
};

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
