class TodoTask < ApplicationRecord
  validates :name, :assignee_id, :todo_list_id, :due_date, :author_id, presence: true
  validates :done, presence: true, inclusion: { in: [ true, false ] }
end
