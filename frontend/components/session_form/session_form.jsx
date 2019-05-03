import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signin-form-container">
        <form onSubmit={this.handleSubmit} className="signin-form-box">
          <h1>Welcome to DeskLamp!</h1>
          {/* Please {this.props.formType} or {this.props.navLink}
          {this.renderErrors()} */}
          <div className="signin-form">
            <div className="field">
              <label for="email">Email</label>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="signin-input"
                id="email"
              />
            </div>
            <div className="field">
              <label for="name">Name</label>
              <input type="text"
                value={this.state.name}
                onChange={this.update('name')}
                className="signin-input"
                id="name"
              />
            </div>
            <div className="field">
              <label for="password">Password</label>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signin-input"
                id="password"
              />
            </div>
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }

}

export default withRouter(SessionForm);
