class TodoListCollection < ApplicationRecord
  validates :hub_id, presence: true

  belongs_to :hub,
  primary_key: :id,
  foreign_key: :hub_id,
  class_name: :Hub

  has_many :todo_lists,
  primary_key: :id,
  foreign_key: :todo_collection_id,
  class_name: :TodoList
end
