class CreateOrganizations < ActiveRecord::Migration[5.2]
  def change
    create_table :organizations do |t|
      t.string :name, null: false
      t.text :description
      t.timestamps
    end
    add_index :organizations, :name, unique: true
  end
end
