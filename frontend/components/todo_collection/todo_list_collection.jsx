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
      createNewList: false,
      listname: "",
      listdetails: "",
      createNewTask: false,
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
      manualSave();
    });
  }

  toggleListForm(e) {
    e.preventDefault();
    this.setState({ createNewList: true });
  }

  updateField(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const newList = {
      name: this.state.listname,
      details: this.state.listdetails,
      todo_collection_id: this.props.collectionId
    };
    this.props.createList(newList.todo_collection_id, newList).then(({ todo_list }) => {
      let newId = Object.values(todo_list)[0].id;
      let oldIds = this.state.listIds;
      oldIds.push(newId);
      this.setState({
        createNewList: false,
        listIds: oldIds,
        listname: "",
        listdetails: ""
      });
      this.props.fetchAllLists(this.props.collectionId);
      manualSave();
    });
  }

  cancelSubmit(e) {
    e.preventDefault();
    this.setState({ createNewList: false });
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
              <div id="create-button" onClick={this.toggleListForm.bind(this)}>
                <p>Create new todo list</p>
              </div>
              <h1>Todo Lists</h1>
            </section>

            <ul className="todo-lists">
              {this.state.createNewList ?
                <form id="new-list-form" onSubmit={this.handleSubmit.bind(this)}>
                  <input type="text" id="new-list-name"
                    placeholder="Give this list a name..."
                    onChange={this.updateField("listname")} />
                  <input type="text" id="new-list-details"
                    placeholder="Describe this list..."
                    onChange={this.updateField("listdetails")} />
                  <div id="post-buttons">
                    <input className="post-submit" type="submit" value="Create list" />
                    <button className="post-cancel" onClick={this.cancelSubmit.bind(this)}>Cancel</button>
                  </div>
                </form> : <></>
              }
              {this.state.listIds.map(i => {
                if (this.props.todoLists[i]) {
                  return (
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
                  );
                }
              })}
            </ul>

          </section>
        </section>
      </>
    );
  }
}

export default withRouter(TodoListCollection);
