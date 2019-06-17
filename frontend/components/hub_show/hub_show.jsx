import React from "react";
import { Link, withRouter } from "react-router-dom";
import Loading from "../loading";
import LoggedInHeaderContainer from '../logged_in_header/logged_in_header_container';
import { manualSave } from '../../desklamp';

class HubShow extends React.Component {
  constructor(props) {
    super(props);
    manualSave();
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    let hubId = this.props.match.params.hubId;
    this.props.fetchMessageBoard(hubId);
    this.props.fetchSchedule(hubId);
    this.props.fetchTodoCollection(hubId);
  }

  render() {
    return (
      <h1>Hub View</h1>
    );
  }
}

export default withRouter(HubShow);
