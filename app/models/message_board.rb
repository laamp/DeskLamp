class MessageBoard < ApplicationRecord
  validates :hud_id, presence: true

  belongs_to :hub,
  primary_key: :id,
  foreign_key: :hub_id,
  class_name: :Hub

  has_many :message_board_posts,
  primary_key: :id,
  foreign_key: :message_board_id,
  class_name: :MessageBoardPost
end
