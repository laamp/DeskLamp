class CreateTodoTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :todo_tasks do |t|
      t.string :name, null: false
      t.boolean :done, null: false, default: false
      t.integer :assignee_id
      t.integer :author_id, null: false
      t.integer :todo_list_id, null: false
      t.date :due_date
      t.text :details
      t.timestamps
    end
    add_index :todo_tasks, :assignee_id
    add_index :todo_tasks, :author_id
    add_index :todo_tasks, :todo_list_id
    add_foreign_key :todo_tasks, :todo_lists, column: :todo_list_id
    add_foreign_key :todo_tasks, :users, column: :assignee_id
    add_foreign_key :todo_tasks, :users, column: :author_id
  end
end
