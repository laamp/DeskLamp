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
      boardId: -1,
      posts: [],
      lists: [],
      tasks: [],
      events: []
    };
    this.parseDate = this.parseDate.bind(this);
  }

  componentDidMount() {
    let hubId = this.props.match.params.hubId;

    this.props.fetchMessageBoard(hubId).then(board => {
      let boardId = Object.values(board.message_board)[0].id;
      this.setState({ boardId });
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
            this.setState({ tasks: localTasks.concat(newTasks), loading: false });
          });
        }
        this.setState({ lists: localLists });
      });
    });

    this.props.setCurrentHub(this.props.currentHub.id);
  }

  parseDate(date) {
    if (date === "" || date === undefined || date === null) return "";

    const months = {
      1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr",
      5: "May", 6: "Jun", 7: "Jul", 8: "Aug",
      9: "Sep", 10: "Oct", 11: "Nov", 12: "Dec"
    }
    let output = "";
    let dateArray = date.split("-");
    output += months[parseInt(dateArray[1])];
    output = output + " " + dateArray[2] + ", " + parseInt(dateArray[0]);
    return (output);
  }

  render() {
    return (
      <>
        {this.state.loading === true ? <Loading /> : <></>}
        <LoggedInHeaderContainer />
        <section className="hub-show-wrapper">
          <section className="hub-show-container">
            <section className="hub-header">
              <div className="hub-title">{this.props.currentHub.name}</div>
              <div className="hub-description">{this.props.currentHub.description}</div>
            </section>
            <section className="hub-tiles-container">

              <Link className="tile-link" to={`/message_boards/${this.state.boardId}`}>
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
              </Link>

              <section className="hub-show-tile todo-list">
                <div className="hub-tile-title">To-dos</div>
                <ul>
                  {
                    this.state.lists.map(list =>
                      <li className="todo-list-preview" key={list.id}>
                        <p className="todo-list-name">{list.name}</p>
                        <ul>
                          {
                            this.state.tasks.map(task => {
                              if (task.todo_list_id === list.id) {
                                return <li className="task-preview" key={task.id}>
                                  <p className="task-name">{task.name}</p>
                                </li>
                              }
                            })
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
                      <div className="event-preview-dates">
                        <p className="event-preview-start">{this.parseDate(event.startDate)}&nbsp;to&nbsp;</p>
                        <p className="event-preview-end">{this.parseDate(event.endDate)}</p>
                      </div>
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
