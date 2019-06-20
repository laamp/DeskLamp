import { connect } from "react-redux";
import MessageBoardShow from "./message_board";
import {
  fetchAllPosts,
  fetchPost,
  createPost,
  deletePost
} from "../../actions/message_board_actions";
import { getUser } from "../../actions/session_actions";

const mapStateToProps = (state, { match }) => ({
  currentBoard: state.entities.messageBoards.messageBoards[match.params.messageBoardId],
  currentBoardId: match.params.messageBoardId,
  users: state.entities.users,
  allPosts: state.entities.messageBoards.messageBoardPosts
});

const mapDispatchToProps = dispatch => ({
  fetchAllPosts: messageBoardId => dispatch(fetchAllPosts(messageBoardId)),
  fetchPost: (messageBoardId, id) => dispatch(fetchPost(messageBoardId, id)),
  createPost: (messageBoardId, post) => dispatch(createPost(messageBoardId, post)),
  deletePost: (messageBoardId, id) => dispatch(deletePost(messageBoardId, id)),
  getUser: id => dispatch(getUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageBoardShow);
