import { connect } from "react-redux";
import MessageBoardPost from "./message_board_post";
import { fetchPost, deletePost } from "../../actions/message_board_actions";

const mapStateToProps = (state, { match }) => ({
  users: state.entities.users,
  hubs: state.entities.hubs,
  messageBoards: state.entities.messageBoards.messageBoards,
  thisPost: state.entities.messageBoards.messageBoardPosts[match.params.messageBoardPostId]
});

const mapDispatchToProps = dispatch => ({
  fetchPost: (boardId, id) => dispatch(fetchPost(boardId, id)),
  deletePost: (boardId, id) => dispatch(deletePost(boardId, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageBoardPost);
