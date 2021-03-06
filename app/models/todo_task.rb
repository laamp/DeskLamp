class TodoTask < ApplicationRecord
  validates :name, :author_id, presence: true
  validates :done, inclusion: { in: [ true, false ] }

  belongs_to :author,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :User

  belongs_to :assignee,
  primary_key: :id,
  foreign_key: :assignee_id,
  class_name: :User

  belongs_to :todo_list,
  primary_key: :id,
  foreign_key: :todo_list_id,
  class_name: :TodoList
end
