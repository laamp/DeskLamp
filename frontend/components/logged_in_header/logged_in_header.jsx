import React from "react";
import { Link, withRouter } from "react-router-dom";
import Loading from "../loading";

class LoggedInHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderUserModal: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    console.log("Clicked!");
    let flag = this.state.renderUserModal;
    this.setState({ renderUserModal: !flag });
  }

  render() {
    if (!this.props.currentOrganization) return null;
    return (
      <header className="logged-in-header">
        <div className="left-header-item">
          <img src={window.basecampLogoUrl} alt="Organizations" draggable='false' />
        </div>
        <div className="center-header-item">
          <nav className="nav-items">
            <Link to={`/organizations/${this.props.currentOrg.id}`}>
              <i id="home-icon" className="material-icons">home</i>
              <div id="home-button">Home</div>
            </Link>
          </nav>
        </div>
        <div className="right-header-item">
          <i onClick={this.toggleModal} className="material-icons">account_circle</i>
          {this.state.renderUserModal === true ? <h1>TRUE</h1> : <></>}
        </div>
      </header>
    );
  }
}

export default withRouter(LoggedInHeader);
