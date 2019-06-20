import { connect } from "react-redux";
import { fetchMessageBoard, fetchAllPosts } from "../../actions/message_board_actions";
import { fetchTodoCollection, fetchAllTasks, fetchAllTodoLists } from "../../actions/todo_list_actions";
import { fetchSchedule, fetchAllEvents } from "../../actions/schedule_actions";
import HubShow from "./hub_show";
import { receiveCurrentHub } from "../../actions/session_actions";

const mapStateToProps = (state, { match }) => ({
  currentHub: state.entities.hubs[match.params.hubId],
  messageBoards: state.entities.messageBoards.messageBoards,
  todoCollections: state.entities.todoLists.todoCollections,
  schedules: state.entities.events.schedules
});

const mapDispatchToProps = dispatch => ({
  fetchMessageBoard: hubId => dispatch(fetchMessageBoard(hubId)),
  fetchAllPosts: messageBoardId => dispatch(fetchAllPosts(messageBoardId)),
  fetchTodoCollection: hubId => dispatch(fetchTodoCollection(hubId)),
  fetchAllLists: collectionId => dispatch(fetchAllTodoLists(collectionId)),
  fetchAllTasks: (collectionId, listId) => dispatch(fetchAllTasks(collectionId, listId)),
  fetchSchedule: hubId => dispatch(fetchSchedule(hubId)),
  fetchAllEvents: scheduleId => dispatch(fetchAllEvents(scheduleId)),
  setCurrentHub: hubId => dispatch(receiveCurrentHub(hubId))
});

export default connect(mapStateToProps, mapDispatchToProps)(HubShow);
