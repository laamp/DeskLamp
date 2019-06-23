import { connect } from "react-redux";
import TodoListCollection from "./todo_list_collection";
import {
  fetchAllTodoLists,
  fetchAllTasks,
  createTodoList,
  createTask,
  updateTask,
  fetchTask
} from "../../actions/todo_list_actions";

const mapStateToProps = (state, { match }) => ({
  collectionId: match.params.todoListCollectionId,
  currentCollection: state.entities.todoLists.todoListCollections[match.params.todoListCollectionId],
  todoLists: state.entities.todoLists.todoLists,
  todoTasks: state.entities.todoLists.todoListTasks,
  currentUserId: state.session.id
});

const mapDispatchToProps = dispatch => ({
  fetchAllLists: collectionId => dispatch(fetchAllTodoLists(collectionId)),
  fetchAllTasks: (collectionId, listId) => dispatch(fetchAllTasks(collectionId, listId)),
  createList: (collectionId, list) => dispatch(createTodoList(collectionId, list)),
  createTask: (collectionId, listId, task) => dispatch(createTask(collectionId, listId, task)),
  updateTask: (collId, listId, id, task) => dispatch(updateTask(collId, listId, id, task)),
  getTask: (collId, listId, id) => dispatch(fetchTask(collId, listId, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListCollection);
