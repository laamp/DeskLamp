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
      <>
        <LoggedInHeaderContainer />
        <section className="hub-show-wrapper">
          <section className="hub-show-container">
            <section className="hub-show-tile message-board"></section>
            <section className="hub-show-tile todo-list"></section>
            <section className="hub-show-tile schedule"></section>
          </section>
        </section>
      </>
    );
  }
}

export default withRouter(HubShow);
