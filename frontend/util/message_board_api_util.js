export const fetchMessageBoard = id => {
  return (
    $.ajax({
      method: "GET",
      url: `api/message_boards/${id}`
    })
  );
};
window.fetchMessageBoard = fetchMessageBoard;
export const fetchAllPosts = messageBoardId => {
  return (
    $.ajax({
      method: "GET",
      url: `api/message_boards/${messageBoardId}/message_board_posts`
    })
  );
};
window.fetchAllPosts = fetchAllPosts;
export const fetchPost = (messageBoardId, id) => {
  return (
    $.ajax({
      method: "GET",
      url: `api/message_boards/${messageBoardId}/message_board_posts/${id}`
    })
  );
};
window.fetchPost = fetchPost;
export const createPost = (messageBoardId, post) => {
  return (
    $.ajax({
      method: "POST",
      url: `api/message_boards/${messageBoardId}/message_board_posts`,
      data: { post }
    })
  );
};

export const updatePost = (messageBoardId, id, post) => {
  return (
    $.ajax({
      method: "PATCH",
      url: `api/message_boards/${messageBoardId}/message_board_posts/${id}`,
      data: { message_board_post: post }
    })
  );
};

export const deletePost = (messageBoardId, id) => {
  return (
    $.ajax({
      method: "DELETE",
      url: `api/message_boards/${messageBoardId}/message_board_posts/${id}`
    })
  );
};
