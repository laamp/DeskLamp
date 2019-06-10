class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.integer :author_id, null: false
      t.text :notes, null: false
      t.date :start_date
      t.date :end_date
      t.integer :schedule_id, null: false
      t.timestamps
    end
    add_index :events, :author_id
    add_index :events, :schedule_id    
    add_foreign_key :events, :users, column: :author_id
  end
end
