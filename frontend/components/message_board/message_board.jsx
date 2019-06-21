import React from "react";
import { withRouter, Link, Redirect } from "react-router-dom";
import { manualSave } from "../../desklamp";
import LoggedInHeaderContainer from '../logged_in_header/logged_in_header_container';
import Loading from "../loading";

class MessageBoardShow extends React.Component {
  constructor(props) {
    super(props);
    manualSave();
    this.state = {
      loading: true,
      hubId: -1,
      userNames: {}
    };
  }

  componentDidMount() {
    this.setState({ hubId: this.props.currentBoard.id });

    this.props.fetchAllPosts(this.props.currentBoardId)
      .then(() => {
        let statePosts = Object.values(this.props.allPosts);
        for (let i = 0; i < statePosts.length; i++) {
          this.props.getUser(statePosts[i].authorId);
          manualSave();
        }
        this.setState({ loading: false });
      });
  }

  renderUserName(userId) {
    if (!this.props.users[userId]) return (<></>);
    return (<p>{this.props.users[userId].name}</p>);
  }

  convertRailsDate(railsDate) {
    if (railsDate === null || railsDate === undefined) return "";

    const months = {
      1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr",
      5: "May", 6: "Jun", 7: "Jul", 8: "Aug",
      9: "Sep", 10: "Oct", 11: "Nov", 12: "Dec"
    }
    let dateArr = railsDate.split("-");
    let output = months[parseInt(dateArr[1])] + " ";
    output += dateArr[2][0] + dateArr[2][1] + ", ";
    output += dateArr[0];
    return output;
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
          </section>

          <section id="message-board-body">
            <section id="message-board-body-title">
              <Link id="create-button" to="/message_board_posts/new">
                <p>Create new post</p>
              </Link>
              <h1>Message Board</h1>
            </section>

            <ul className="posts-list">
              {Object.values(this.props.allPosts).filter(post => {
                if (post.id === undefined) return false;
                return true;
              }).map(post =>
                <Link to={`/message_board_posts/${post.id}`} key={post.id}>
                  <li className="message-board-post">
                    <p className="mb-post-title">{post.title}</p>
                    <div className="post-info">
                      {this.renderUserName(post.authorId)}&nbsp;•&nbsp;
                    <p>{this.convertRailsDate(post.createdAt)}</p>&nbsp;—&nbsp;
                    <p>{post.body}</p>
                    </div>
                  </li>
                </Link>)}
            </ul>

          </section>
        </section>
      </>
    );
  }
}

export default withRouter(MessageBoardShow);
