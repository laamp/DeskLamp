import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signIn, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: "signin",
  navLink: <Link to="/signup">sign up instead</Link>
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signIn(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
