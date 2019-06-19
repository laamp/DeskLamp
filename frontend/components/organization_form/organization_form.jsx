import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import Loading from '../loading';
import { manualSave } from '../../desklamp';

class OrganizationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      jobTitle: '',
      name: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.signOutSubmit = this.handleSubmit.bind(this);
    manualSave();
  }

  componentDidMount() {
    this.props.requestUserOrgs()
      .then(() => this.setState({ loading: false }));
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const organization = Object.assign({}, this.state);
    this.props.createOrganization(organization).then(org => {
      return (
        this.props.requestUserOrgs()
          .then(this.setState({ loading: false }))
      );
    });
  }

  signOutSubmit(e) {
    e.preventDefault();
    this.props.signOut().then(() => {
      return (
        <Redirect to='/' />
      );
    });
  }

  hasOrganizationsSection(organizations) {
    if (this.state.loading) return <Loading />;
    return (
      <>
        <section id="organizations-container">
          <div id="organizations">
            <h2>DeskLamp</h2>
            <ul>
              {Object.values(organizations).map(
                org => <li key={org.id}>
                  <Link onClick={() => this.props.setCurrentOrganization(org.id)} to={`/organizations/${org.id}`}>
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
              onChange={this.update('name')}
            />
          </div>
          <input className='session-submit'
            type='submit'
            value='Create Company'
          />
        </form>
      </>
    );
  }

  render() {
    const { organizations } = this.props;

    return (
      <>
        {this.state.loading === true ? <Loading /> : <></>}
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
