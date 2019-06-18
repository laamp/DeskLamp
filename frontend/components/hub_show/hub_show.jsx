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
      posts: [],
      lists: [],
      tasks: [],
      events: []
    };
  }

  componentDidMount() {
    let hubId = this.props.match.params.hubId;

    this.props.fetchMessageBoard(hubId).then(board => {
      this.props.fetchAllPosts(Object.keys(board.message_board)[0]).then(posts => {
        let localPosts = Object.values(posts.message_board_posts);
        this.setState({ posts: localPosts });
      });
    });

    this.props.fetchSchedule(hubId).then(schedule => {
      this.props.fetchAllEvents(Object.keys(schedule.schedule)[0]).then(events => {
        let localEvents = Object.values(events.events);
        this.setState({ events: localEvents });
      });
    });

    this.props.fetchTodoCollection(hubId).then(collection => {
      let collectionId = Object.keys(collection.todo_list_collection)[0];
      this.props.fetchAllLists(collectionId).then(lists => {
        let localLists = this.state.lists;
        let newLists = Object.values(lists.todo_lists);
        for (let i = 0; i < newLists.length; i++) {
          localLists.push(newLists[i]);
          let listId = newLists[i].id;
          this.props.fetchAllTasks(collectionId, listId).then(tasks => {
            let localTasks = this.state.tasks;
            let newTasks = tasks.todo_tasks;
            this.setState({ tasks: localTasks.concat(newTasks) });
            window.test = this.state.tasks;
          });
        }
        this.setState({ lists: localLists });
      });
    });
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
                <ul>
                  {
                    this.state.lists.map(list =>
                      <li className="todo-list-preview" key={list.id}>
                        <p className="todo-list-name">{list.name}</p>
                        <ul>
                          {
                            this.state.tasks.map(task =>
                              <li className="task-preview" key={task.id}>
                                <p className="task-name">{task.name}</p>
                              </li>)
                          }
                        </ul>
                      </li>)
                  }
                </ul>
              </section>

              <section className="hub-show-tile schedule">
                <div className="hub-tile-title">Schedules</div>
                <ul>
                  {this.state.events.map(event =>
                    <li className="event-preview" key={event.id}>
                      <p className="event-preview-notes">{event.notes}</p>
                      <p className="event-preview-start">{event.startDate}</p>
                      <p className="event-preview-end">{event.endDate}</p>
                    </li>
                  )}
                </ul>
              </section>

            </section>
          </section>
        </section>
      </>
    );
  }
}

export default withRouter(HubShow);
