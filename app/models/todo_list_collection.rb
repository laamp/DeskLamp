class TodoListCollection < ApplicationRecord
  validates :hub_id, presence: true

  belongs_to :hub,
  primary_key: :id,
  foreign_key: :hub_id,
  class_name: :Hub
end
