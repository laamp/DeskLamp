import { connect } from "react-redux";
import { fetchMessageBoard, fetchAllPosts } from "../../actions/message_board_actions";
import { fetchTodoCollection } from "../../actions/todo_list_actions";
import { fetchSchedule } from "../../actions/schedule_actions";
import HubShow from "./hub_show";

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
  fetchSchedule: hubId => dispatch(fetchSchedule(hubId))
});

export default connect(mapStateToProps, mapDispatchToProps)(HubShow);
