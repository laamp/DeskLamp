import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Loading from "../loading";
import LoggedInHeaderContainer from '../logged_in_header/logged_in_header_container';
import { manualSave } from '../../desklamp';

class OrganizationHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      newProjectToggle: false,
      newTeamToggle: false,
      name: "",
      description: "",
      hub_type: -1,
      organization_id: -1
    };
    manualSave();

    this.newTeamToggle = this.newTeamToggle.bind(this);
    this.newProjectToggle = this.newProjectToggle.bind(this);
    this.toggleOff = this.toggleOff.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    this.props.clearErrors();
  }

  componentDidMount() {
    this.props.fetchHubs(this.props.match.params.organizationId)
      .then(() => (this.setState({ loading: false })))
      .fail(() => (this.setState({ loading: false })));
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const newHub = Object.assign(
      {}, {
        name: this.state.name,
        description: this.state.description,
        hub_type: this.state.hub_type,
        organization_id: this.state.organization_id
      }
    );
    this.props.createHub(newHub).then(() => {
      this.toggleOff();
      this.props.fetchHubs(this.props.currentOrganization.id);
      manualSave();
    });
  }

  updateField(field, hubType) {
    return e => this.setState({
      [field]: e.currentTarget.value,
      hub_type: hubType,
      organization_id: this.props.currentOrganization.id
    });
  }

  newProjectToggle() {
    let flag = this.state.newProjectToggle;

    this.setState({ newProjectToggle: !flag, newTeamToggle: false });
  }

  newTeamToggle() {
    let flag = this.state.newTeamToggle;

    this.setState({ newProjectToggle: false, newTeamToggle: !flag });
  }

  toggleOff() {
    this.setState({ newProjectToggle: false, newTeamToggle: false });
  }

  renderHubs(hubtype) {
    let companyName = this.props.currentOrganization.name;
    companyName = companyName.slice(0, 1).toUpperCase() + companyName.slice(1);

    return (
      <>
        <div className='hub-divider'>
          {this.state.newProjectToggle && hubtype === "project" ? this.renderNewHubForm(hubtype) : <></>}
          {this.state.newTeamToggle && hubtype === "team" ? this.renderNewHubForm(hubtype) : <></>}
          <p>
            {hubtype === "team"
              ? <button type="button" onClick={this.newTeamToggle} className="add-hub-button">
                <span>+</span>New
                </button>
              : <></>
            }
            {hubtype === "project"
              ? <button type="button" onClick={this.newProjectToggle} className="add-hub-button">
                <span>+</span>New
                </button>
              : <></>
            }
            <span>
              {hubtype === "company" ? companyName :
                hubtype.slice(0, 1).toUpperCase() + hubtype.slice(1)}
            </span>
          </p>
        </div>
        <ul className='hubs-list'>
          {Object.values(this.props.hubs).map(hub => {
            if (hub.hubType === hubtype) {
              return (
                <li className='hub-tile' key={hub.id}>
                  <Link to={`/hubs/${hub.id}`}>
                    <h2>{hub.name}</h2>
                    <h3>{hub.description}</h3>
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      </>
    );
  }

  renderErrors() {
    return (
      <ul className="org-errors">
        {this.props.errors.map((error, i) => (
          <li key={i}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  renderNewHubForm(formType) {
    return (
      <>
        <div className="up-pointer hub-form-pointer"></div>
        <div className="new-hub-form-wrapper">
          <form className="new-hub-form" onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.updateField("name", formType)}
              placeholder={`Enter your ${formType} name`} />
            <input type="text" onChange={this.updateField("description", formType)}
              placeholder="Enter a description" />
            <div>
              <input className="hub-submit" type="submit" value="Create" />
              <button className="hub-cancel" onClick={this.toggleOff}> Cancel</button>
            </div>
          </form>
        </div>
      </>
    );
  }

  render() {
    if (this.state.loading) return <Loading />;

    return (
      <>
        <LoggedInHeaderContainer />
        {this.renderErrors()}

        <section className='hubs-wrapper'>
          <div className='hubs-container'>
            {this.renderHubs("company")}
            {this.renderHubs("team")}
            {this.renderHubs("project")}
          </div>
        </section>
      </>
    );
  }
}

export default withRouter(OrganizationHome);
