class CreateTodoListCollections < ActiveRecord::Migration[5.2]
  def change
    create_table :todo_list_collections do |t|
      t.integer :hub_id, null: false
      t.timestamps
    end
    add_index :todo_list_collections, :hub_id
    add_foreign_key :todo_list_collections, :hubs, column: :hub_id
    add_foreign_key :todo_lists, :todo_list_collections, column: :todo_collection_id
  end
end
