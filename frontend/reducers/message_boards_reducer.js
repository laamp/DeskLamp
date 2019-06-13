import {
  RECEIVE_MESSAGE_BOARD,
  RECEIVE_ALL_POSTS,
  RECEIVE_POST,
  DELETED_POST
} from "../actions/message_board_actions";

const messageBoardsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_MESSAGE_BOARD:
      return Object.assign(
        {}, oldState, {
          messageBoards: {
            [action.message_board.id]: action.message_board
          }
        }
      );
    case RECEIVE_ALL_POSTS:
      return Object.assign(
        {},
        oldState,
        { messageBoardPosts: action.message_board_posts }
      );
    case RECEIVE_POST:
      return Object.assign(
        {},
        oldState,
        {
          messageBoardPosts: {
            [action.message_board_post.id]: action.message_board_post
          }
        }
      );
    case DELETED_POST:
      let newState = Object.assign({}, oldState);
      delete newState.messageBoardPosts[action.postId];
      return newState;
    default:
      return oldState;
  }
};

export default messageBoardsReducer;
