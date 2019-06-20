import React from "react";
import { withRouter, Link } from "react-router-dom";
import { manualSave } from "../../desklamp";
import LoggedInHeaderContainer from "../logged_in_header/logged_in_header_container";
import Loading from "../loading";

class MessageBoardPost extends React.Component {
  constructor(props) {
    super(props);
    manualSave();
    this.state = {
      loading: true,
      hubId: -1,
      messageBoardId: -1
    };
  }

  componentDidMount() {
    const mbId = this.props.thisPost.messageBoardId;
    const thisBoard = this.props.messageBoards[mbId];
    const hId = thisBoard.hubId;
    this.setState({ messageBoardId: mbId, hubId: hId });

    manualSave();
    this.setState({ loading: false });
  }

  componentDidUpdate() {
    manualSave();
  }

  render() {
    return (
      <>
        {this.state.loading === true ? <Loading /> : <></>}
        <LoggedInHeaderContainer />
        <section id="message-board-wrapper">
          <section id="message-board-header">
            <Link id="hub-link" to={`/hubs/${this.state.hubId}`}>
              <i className="material-icons">dashboard</i>
              <p>Link to Hub</p>
            </Link>
            <div className="link-spacer"><p>></p></div>
            <Link id="mb-link" to={`/message_boards/${this.state.messageBoardId}`}>
              <i className="material-icons">event</i>
              <p>Back to Message Board</p>
            </Link>
          </section>

          <section className="this-post">
            <div className="this-post-title">{this.props.thisPost.title}</div>
            <div className="this-post-body">{this.props.thisPost.body}</div>
          </section>

        </section>
      </>
    );
  }
}

export default withRouter(MessageBoardPost);
