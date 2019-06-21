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
      let listIds = Object.keys(todo_lists);
      let taskIds = [];
      for (let i = 0; i < listIds.length; i++) {
        this.props.fetchAllTasks(this.props.collectionId, listIds[i]).then(asdf => {
          // console.log(asdf);
        });
      }
      this.setState({ loading: false, listIds });
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
              <Link id="create-button" to="/todo_lists/new">
                <p>Create new todo list</p>
              </Link>
              <h1>Todo Lists</h1>
            </section>
          </section>
        </section>
      </>
    );
  }
}

export default withRouter(TodoListCollection);
