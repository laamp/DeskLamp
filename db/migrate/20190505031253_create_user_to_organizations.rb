class CreateUserToOrganizations < ActiveRecord::Migration[5.2]
  def change
    create_table :user_to_organizations do |t|
      t.integer :user_id, null: false
      t.integer :organization_id, null: false
      t.boolean :admin, null: false, default: false
      t.timestamps
    end
    add_index :user_to_organizations, :user_id, unique: true
    add_index :user_to_organizations, :organization_id, unique: true
    add_foreign_key :user_to_organizations, :users, column: :user_id
    add_foreign_key :user_to_organizations, :organizations, column: :organization_id
  end
end
