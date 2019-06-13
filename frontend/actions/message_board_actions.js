import * as APIUtil from "../util/message_board_api_util";

export const RECEIVE_MESSAGE_BOARD = "RECEIVE_MESSAGE_BOARD";
export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const DELETED_POST = "DELETED_POST";
export const RECEIVE_MESSAGE_BOARD_ERRORS = "RECEIVE_MESSAGE_BOARD_ERRORS";
export const CLEAR_MESSAGE_BOARD_ERRORS = "CLEAR_MESSAGE_BOARD_ERRORS";

const receiveMessageBoard = board => ({
  type: RECEIVE_MESSAGE_BOARD,
  message_board: board
});

const receivePosts = posts => ({
  type: RECEIVE_ALL_POSTS,
  message_board_posts: posts
});

const receivePost = post => ({
  type: RECEIVE_POST,
  message_board_post: post
});

const deletedPost = post => ({
  type: DELETED_POST,
  postId: post.id
});

const receiveMessageBoardErrors = errors => ({
  type: RECEIVE_MESSAGE_BOARD_ERRORS,
  errors: errors
});

export const clearMessageBoardErrors = () => ({
  type: CLEAR_MESSAGE_BOARD_ERRORS
});

export const fetchMessageBoard = id => dispatch => (
  APIUtil.fetchMessageBoard(id)
    .then(board => dispatch(receiveMessageBoard(board)))
    .fail(err => dispatch(receiveMessageBoardErrors(err)))
);

export const fetchAllPosts = id => dispatch => (
  APIUtil.fetchAllPosts(id)
    .then(posts => dispatch(receivePosts(posts)))
    .fail(err => dispatch(receiveMessageBoardErrors(err)))
);

export const fetchPost = (boardId, id) => dispatch => (
  APIUtil.fetchPost(boardId, id)
    .then(post => dispatch(receivePost(post)))
    .fail(err => dispatch(receiveMessageBoardErrors(err)))
);

export const createPost = (boardId, post) => dispatch => (
  APIUtil.createPost(boardId, post)
    .then(post => dispatch(receivePost(post)))
    .fail(err => dispatch(receiveMessageBoardErrors(err)))
);

export const updatePost = (boardId, id, post) => dispatch => (
  APIUtil.updatePost(boardId, id, post)
    .then(post => dispatch(receivePost(post)))
    .fail(err => dispatch(receiveMessageBoardErrors(err)))
);

export const deletePost = (boardId, id) => dispatch => (
  APIUtil.deletePost(boardId, id)
    .then(() => dispatch(deletedPost()))
    .fail(err => dispatch(receiveMessageBoardErrors(err)))
);
