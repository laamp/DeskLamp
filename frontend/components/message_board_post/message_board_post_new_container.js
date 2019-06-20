import { connect } from "react-redux";
import MessageBoardPostNew from "./message_board_post_new";
import { createPost } from "../../actions/message_board_actions";

const mapStateToProps = state => ({
  hubs: state.entities.hubs,
  messageBoards: state.entities.messageBoards.messageBoards,
  currentUser: state.session.id,
  currentHub: state.session.hub
});

const mapDispatchToProps = dispatch => ({
  createPost: (boardId, post) => dispatch(createPost(boardId, post))
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageBoardPostNew);
