class MessageBoardPost < ApplicationRecord
  validates :title, :body, :author_id, :message_board_id, presence: true

  belongs_to :user,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :User

  belongs_to :message_board,
  primary_key: :id,
  foreign_key: :message_board_id,
  class_name: :MessageBoard
end
