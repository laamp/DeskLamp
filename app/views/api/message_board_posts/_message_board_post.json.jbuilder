json.set! message_board_post.id do
  json.extract! message_board_post, :id, :title, :body, :category, :author_id, :message_board_id, :created_at
end
