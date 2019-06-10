class CreateMessageBoards < ActiveRecord::Migration[5.2]
  def change
    create_table :message_boards do |t|
      t.integer :hub_id, null: false
      t.timestamps
    end
    add_index :message_boards, :hub_id
    add_foreign_key :message_boards, :hubs, column: :hub_id
    add_foreign_key :message_board_posts, :message_boards, column: :message_board_id
  end
end
