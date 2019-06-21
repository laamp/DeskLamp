import React from "react";
import { withRouter, Link, Redirect } from "react-router-dom";
import { manualSave } from "../../desklamp";
import LoggedInHeaderContainer from '../logged_in_header/logged_in_header_container';
import Loading from "../loading";

class MessageBoardShowNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      hubId: -1,
      messageBoardId: -1,
      postTitle: "",
      postBody: ""
    };
    manualSave();
  }

  componentDidMount() {
    const hId = this.props.currentHub;
    let mbId = -1;

    let allBoards = Object.values(this.props.messageBoards);
    for (let i = 0; i < allBoards.length; i++) {
      if (allBoards[i].id === hId) mbId = allBoards[i].id;
    }

    this.setState({ hubId: hId, messageBoardId: mbId });

    manualSave();
  }

  handleSubmit(e) {
    e.preventDefault();
    const newPost = Object.assign(
      {}, {
        title: this.state.postTitle,
        body: this.state.postBody,
        author_id: this.props.currentUser,
        message_board_id: this.state.messageBoardId
      }
    );
    this.props.createPost(newPost.message_board_id, newPost).then(() => {
      manualSave();
      this.props.history.push(`/message_boards/${this.state.messageBoardId}`);
    });
  }

  updateField(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
      <>
        {this.state.loading === true ? <Loading /> : <></>}
        <LoggedInHeaderContainer />
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

        <section id="new-post-form-wrapper">
          <form className="new-post-form" onSubmit={this.handleSubmit.bind(this)}>
            <input type="text" onChange={this.updateField("postTitle")}
              placeholder="Enter title of your post" />
            <input type="text" onChange={this.updateField("postBody")}
              placeholder="Your post here" />
            <div>
              <input className="post-submit" type="submit" value="Post" />
              <button className="post-cancel">Cancel</button>
            </div>
          </form>
        </section>
      </>
    );
  }
}

export default withRouter(MessageBoardShowNew);