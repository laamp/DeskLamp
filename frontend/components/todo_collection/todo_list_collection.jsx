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
      createNewTask: [],
      taskname: "",
      taskdetails: "",
      hubId: -1,
      listIds: [],
      taskIds: []
    };
    manualSave();
    this.taskChecked = this.taskChecked.bind(this);
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

  addListId(id) {
    if (!this.state.createNewTask.includes(id)) {
      let listIds = this.state.createNewTask;
      listIds.push(id);
      this.setState({ createNewTask: listIds });
    }
  }

  removeListId(id) {
    let filtered = this.state.createNewTask.filter(num => {
      if (num !== id) return true;
      return false;
    });
    this.setState({ createNewTask: filtered });
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
        loading: true,
        createNewList: false,
        listIds: oldIds,
        listname: "",
        listdetails: ""
      });
      this.props.fetchAllLists(this.props.collectionId).then(() => {
        this.setState({ loading: false });
      });
      manualSave();
    });
  }

  cancelSubmit(e) {
    e.preventDefault();
    this.setState({ createNewList: false });
  }

  handleTaskSubmit(e, listId) {
    e.preventDefault();
    const newTask = {
      name: this.state.taskname,
      details: this.state.taskdetails,
      assignee_id: this.props.currentUserId,
      author_id: this.props.currentUserId,
      todo_list_id: listId,
      due_date: "1970-01-01"
    };
    this.props.createTask(this.props.collectionId, newTask.todo_list_id, newTask)
      .then(({ todo_task }) => {
        this.setState({
          loading: true,
          createNewTask: [],
          taskname: "",
          taskdetails: ""
        });
        this.componentDidMount();
      });
  }

  renderNewTaskForm(listId) {
    return (
      <form className="new-todo-form" onSubmit={() => this.handleTaskSubmit(event, listId)}>
        <input type="text" className="new-todo-name"
          placeholder="Give this task a name..."
          onChange={this.updateField("taskname")} />
        <input type="text" className="new-todo-details"
          placeholder="Describe this task..."
          onChange={this.updateField("taskdetails")} />
        <div id="post-buttons">
          <input className="post-submit" type="submit" value="Create task" />
          <button className="post-cancel" onClick={() => this.removeListId(listId)}>Cancel</button>
        </div>
      </form>
    );
  }

  taskChecked(e, listId, taskId) {
    let task;
    for (let i = 0; i < this.props.todoTasks.length; i++) {
      if (this.props.todoTasks[i].id === taskId) {
        task = this.props.todoTasks[i];
      }
    }
    task.done = !task.done;
    this.props.updateTask(
      this.props.collectionId,
      listId,
      taskId,
      task
    ).then(({ todo_task }) => {
      this.componentDidMount();
    });
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
                <form className="new-todo-form" onSubmit={this.handleSubmit.bind(this)}>
                  <input type="text" className="new-todo-name"
                    placeholder="Give this list a name..."
                    onChange={this.updateField("listname")} />
                  <input type="text" className="new-todo-details"
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
                      <p className="list-title">
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
                          <p className="task-info">
                            <input type="checkbox" checked={task.done} onChange={() => this.taskChecked(event, i, task.id)} />
                            {task.name}&nbsp;•&nbsp;{task.details}
                          </p>
                        </section>
                      )}

                      {this.state.createNewTask.includes(i) ?
                        this.renderNewTaskForm(i) :
                        <button className="create-task-button" onClick={() => this.addListId(i)}>Create new task</button>
                      }
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
