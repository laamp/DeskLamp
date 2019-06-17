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
      loading: true,
      posts: []
    };
  }

  componentDidMount() {
    let hubId = this.props.match.params.hubId;
    this.props.fetchMessageBoard(hubId).then(board => {
      window.messageboard = board.message_board;
      this.props.fetchAllPosts(Object.keys(board.message_board)[0]).then(posts => {
        let localPosts = Object.values(posts.message_board_posts);
        this.setState({ posts: localPosts });
      });
    });
    this.props.fetchSchedule(hubId);
    this.props.fetchTodoCollection(hubId);
  }

  render() {
    return (
      <>
        <LoggedInHeaderContainer />
        <section className="hub-show-wrapper">
          <section className="hub-show-container">
            <section className="hub-header">
              <div className="hub-title">{this.props.currentHub.name}</div>
              <div className="hub-description">{this.props.currentHub.description}</div>
            </section>
            <section className="hub-tiles-container">
              <section className="hub-show-tile message-board">
                <div className="hub-tile-title">Message Board</div>
                <ul>
                  {this.state.posts.map(post =>
                    <li className="message-post-preview" key={post.id}>
                      <p className="message-post-preview-title">{post.title}</p>
                      <p>{post.body}</p>
                    </li>)}
                </ul>
              </section>
              <section className="hub-show-tile todo-list">
                <div className="hub-tile-title">To-dos</div>
              </section>
              <section className="hub-show-tile schedule">
                <div className="hub-tile-title">Schedules</div>
              </section>
            </section>
          </section>
        </section>
      </>
    );
  }
}

export default withRouter(HubShow);
