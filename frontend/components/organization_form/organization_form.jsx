import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class OrganizationForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      jobTitle: '',
      orgName: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.requestUserOrgs();
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    //bookmark
  }

  hasOrganizationsSection(organizations) {
    return (
      <>
        <section id="organizations-container">
          <div id="organizations">
            <h2>DeskLamp</h2>
            <ul>
              {Object.values(organizations).map(
                org => <li key={org.id}>
                  <Link to={`/organizations/${org.id}`}>
                    <img src={window.basecampLogoUrl} />
                    <h2>{org.name}</h2>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </section>
      </>
    );
  }

  createOrganizationForm() {
    return (
      <>
        <form onSubmit={this.handleSubmit} className="create-org-form">
          <div className="field">
            <label htmlFor="jobtitle">Job title</label>
            <input id="jobtitle"
              type="text"
              className="signin-input"
              placeholder="e.g. Engineer, Designer"
              value={this.state.jobTitle}
              onChange={this.update('jobTitle')}
            />
          </div>
          <div className="field">
            <label htmlFor="orgname">Company name</label>
            <input id="orgname"
              type="text"
              className="signin-input"
              placeholder="e.g. Google, Inc."
              value={this.state.orgName}
              onChange={this.update('orgName')}
            />
          </div>
          <input className='session-submit'
            type='submit'
            value='Create Organization'
          />
        </form>
      </>
    );
  }

  render() {
    const { organizations } = this.props;

    return (
      <>
        <section className="launchpad-header">
          <div id='left-header-div'>
            <img src={window.blankLogoUrl} alt="DeskLamp" />
            <h1>
              <strong>DeskLamp&nbsp;</strong>Launchpad
            </h1>
          </div>
          <div id='right-header-div'>
            <Link to='/signin' title={this.props.currentUser.name}>
              <i className="material-icons">account_circle</i>
            </Link>
            <button onClick={this.props.signOut}>Log out</button>
          </div>
        </section>

        {Object.entries(organizations).length === 0 ?
          this.createOrganizationForm() :
          this.hasOrganizationsSection(organizations)
        }
      </>
    );
  }
}

export default withRouter(OrganizationForm);
