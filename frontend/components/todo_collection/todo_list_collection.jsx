import React from "react";
import { withRouter, Link, Redirect } from "react-router-dom";
import { manualSave } from "../../desklamp";
import LoggedInHeaderContainer from '../logged_in_header/logged_in_header_container';
import Loading from "../loading";

class TodoListCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      hubId: -1,
      listIds: [],
      taskIds: []
    };
    manualSave();
  }

  componentDidMount() {
    this.setState({ hubId: this.props.currentCollection.hubId });
    this.props.fetchAllLists(this.props.collectionId).then(({ todo_lists }) => {
      let listIds = Object.keys(todo_lists).map(num => num = parseInt(num));
      let taskIds = [];
      for (let i = 0; i < listIds.length; i++) {
        this.props.fetchAllTasks(this.props.collectionId, listIds[i]).then(({ todo_tasks }) => {
          todo_tasks.forEach(task => taskIds.push(task.id));
        });
      }
      this.setState({ loading: false, listIds, taskIds });
      window.tasks = this.props.todoTasks;
      window.taskIds = this.state.taskIds;
      manualSave();
    });
  }

  render() {
    return (
      <>
        {this.state.loading === true ? <Loading /> : <></>}
        <LoggedInHeaderContainer />
        <section id="todo-lists-wrapper">
          <section id="todo-lists-header">
            <Link id="hub-link" to={`/hubs/${this.state.hubId}`}>
              <i className="material-icons">dashboard</i>
              <p>Link to Hub</p>
            </Link>
          </section>

          <section id="todo-collection-body">
            <section id="todo-collection-body-title">
              {/* <Link id="create-button" to="/organizations">
                <p>Create new todo list</p>
              </Link> */}
              <h1>Todo Lists</h1>
            </section>

            <ul className="todo-lists">
              {this.state.listIds.map(i =>
                <li key={i}>
                  <p>
                    <span>
                      {this.props.todoLists[i].name}
                    </span>
                    &nbsp;—&nbsp;
                    {this.props.todoLists[i].details}
                  </p>

                  {this.props.todoTasks.filter(globalTask => {
                    if (globalTask.todo_list_id === i) return true;
                  }).map(task =>
                    <section key={task.id}>
                      <p>{task.name}</p>
                    </section>
                  )}
                </li>
              )}
            </ul>

          </section>
        </section>
      </>
    );
  }
}

export default withRouter(TodoListCollection);
