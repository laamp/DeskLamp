import React from 'react';
import { withRouter, Redirect, Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  guestLogin() {
    const guest = {
      email: "fake_email@desklamp.com",
      name: "D. Hansson",
      password: "password"
    };
    this.props.processForm(guest);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => {
      return (
        <Redirect to='/organizations' />
      );
    });
  }

  renderErrors() {
    return (
      <ul className="login-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  formGreeting() {
    if (this.props.formType === 'signin') {
      return (<h2>Log in to DeskLamp</h2>);
    } else {
      return (<h2>Sign up with DeskLamp</h2>);
    }
  }

  formButton() {
    if (this.props.formType === 'signin') {
      return ("Log in");
    } else {
      return ("Sign up");
    }
  }

  renderName() {
    if (this.props.formType === 'signup') {
      return (
        <div className="field">
          <label htmlFor="name">Name</label>
          <input type="text"
            value={this.state.name}
            onChange={this.update('name')}
            className="signin-input"
            id="name"
          />
        </div>
      )
    }
  }

  guestButton() {
    if (this.props.formType === 'signin') {
      return (
        <>
          <button id="guest-signin-button" onClick={this.guestLogin}>
            <h3>
              Guest Log in
          </h3>
          </button>
          <div id="break-container">
            <span>Or, use my email address</span>
          </div>
        </>
      );
    }
  }

  render() {
    return (
      <>
        <section className="signin-container">
          <img id="floating-logo" src={window.basecampLogoUrl} />
          <div className="signin-box">
            {this.formGreeting()}
            {this.props.formType === 'signin' ?
              <Link className='sign-in-up-toggle' to="/signup">Sign up page</Link> :
              <Link className='sign-in-up-toggle' to="/signin">Sign in page</Link>}
            {this.guestButton()}
            <form onSubmit={this.handleSubmit} className="signin-form">
              <div className="field">
                <label htmlFor="email">Email</label>
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="signin-input"
                  id="email"
                  placeholder="e.g. your.email@email.com"
                />
              </div>
              {this.renderName()}
              <div className="field">
                <label htmlFor="password">Password</label>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="signin-input"
                  id="password"
                />
              </div>
              <input className="session-submit" type="submit" value={this.formButton()} />
            </form>
            {this.renderErrors()}
          </div>
        </section>
      </>
    );
  }
}

export default withRouter(SessionForm);
