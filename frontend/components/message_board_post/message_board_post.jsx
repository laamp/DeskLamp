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
    this.deleteThisPost = this.deleteThisPost.bind(this);
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

  authorName() {
    const userId = this.props.thisPost.authorId;
    const user = this.props.users[userId];

    if (!user) return "Unknown author";
    return user.name;
  }

  postDate() {
    const date = this.props.thisPost.createdAt;
    if (!date) return "Unknown post date";

    const months = {
      1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr",
      5: "May", 6: "Jun", 7: "Jul", 8: "Aug",
      9: "Sep", 10: "Oct", 11: "Nov", 12: "Dec"
    }

    let dateArr = date.split("-");
    let output = months[parseInt(dateArr[1])] + " ";
    output += dateArr[2][0] + dateArr[2][1] + ", ";
    output += dateArr[0];
    return output;
  }

  deleteThisPost() {
    this.props.deletePost(this.state.messageBoardId, this.props.thisPost.id);
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
          <section id="message-board-body">
            <Link id="delete-button" onClick={this.deleteThisPost} to={`/message_boards/${this.state.messageBoardId}`}>
              <button>
                <i className="material-icons">delete_forever</i>
              </button>
            </Link>
            <section className="this-post">
              <section id="message-board-body-title">
                <div className="this-post-title">{this.props.thisPost.title}</div>
              </section>

              <section id="this-post-info">
                <p>{this.authorName()}</p>
                <p>{this.postDate()}</p>
              </section>
              <div className="this-post-body">{this.props.thisPost.body}</div>
            </section>
          </section>
        </section>
      </>
    );
  }
}

export default withRouter(MessageBoardPost);
