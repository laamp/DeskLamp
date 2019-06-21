import { connect } from "react-redux";
import TodoListCollection from "./todo_list_collection";
import { fetchAllTodoLists, fetchAllTasks } from "../../actions/todo_list_actions";

const mapStateToProps = (state, { match }) => ({
  collectionId: match.params.todoListCollectionId,
  currentCollection: state.entities.todoLists.todoListCollections[match.params.todoListCollectionId],
  todoLists: state.entities.todoLists.todoLists,
  todoTasks: state.entities.todoLists.todoListTasks
});

const mapDispatchToProps = dispatch => ({
  fetchAllLists: collectionId => dispatch(fetchAllTodoLists(collectionId)),
  fetchAllTasks: (collectionId, listId) => dispatch(fetchAllTasks(collectionId, listId))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListCollection);
