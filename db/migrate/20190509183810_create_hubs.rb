class CreateHubs < ActiveRecord::Migration[5.2]
  def change
    create_table :hubs do |t|
      t.string :name, null: false
      t.text :description
      t.integer :organization_id, null: false
      t.string :hub_type, null: false
      t.timestamps
    end
    add_index :hubs, :organization_id
    add_foreign_key :hubs, :organizations, column: :organization_id
  end
end
