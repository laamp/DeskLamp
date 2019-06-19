import React from "react";
import { withRouter, Link } from "react-router-dom";
import { manualSave } from "../../desklamp";
import LoggedInHeaderContainer from '../logged_in_header/logged_in_header_container';
import Loading from "../loading";

class MessageBoardShow extends React.Component {
  constructor(props) {
    super(props);
    manualSave();
    this.state = {
      loading: true,
      hubId: -1
    };
  }

  componentDidMount() {
    this.setState({ hubId: this.props.currentBoard.id });

    this.props.fetchAllPosts(this.props.currentBoardId)
      .then(posts => {
        manualSave();
        window.thing = this.props.currentBoard;
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <>
        {this.state.loading === true ? <Loading /> : <></>}
        <LoggedInHeaderContainer />
        <section id="message-board-wrapper">
          <section id="message-board-header">
            <Link to={`/hubs/${this.state.hubId}`}>
              <i className="material-icons">dashboard</i>Link to Hub
            </Link>
          </section>

          <section id="message-board-body">
            <section id="message-board-body-title">
              <h1>Message Board</h1>
            </section>
          </section>
        </section>
      </>
    );
  }
}

export default withRouter(MessageBoardShow);
