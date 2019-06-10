class TodoList < ApplicationRecord
  validates :name, :todo_collection_id, presence: true

  belongs_to :todo_collection,
  primary_key: :id,
  foreign_key: :todo_collection_id,
  class_name: :TodoListCollection

  has_many :todo_tasks,
  primary_key: :id,
  foreign_key: :todo_list_id,
  class_name: :TodoTask
end
