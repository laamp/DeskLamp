class CreateSchedules < ActiveRecord::Migration[5.2]
  def change
    create_table :schedules do |t|
      t.integer :hub_id, null: false
      t.timestamps
    end
    add_index :schedules, :hub_id
    add_foreign_key :schedules, :hubs, column: :hub_id
    add_foreign_key :events, :schedules, column: :schedule_id
  end
end
