class TodoList < ApplicationRecord
  validates :name, :todo_collection_id, presence: true

  
end
