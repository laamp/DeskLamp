json.set! @message_board.id do
  json.extract! @message_board, :id, :hub_id
end
