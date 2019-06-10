class CreateMessageBoardPosts < ActiveRecord::Migration[5.2]
  def change
    create_table :message_board_posts do |t|
      t.string :category
      t.string :title, null: false
      t.text :body, null: false
      t.integer :author_id, null: false
      t.integer :message_board_id, null: false
      t.timestamps
    end
    add_index :message_board_posts, :author_id
    add_index :message_board_posts, :message_board_id
    add_foreign_key :message_board_posts, :users, column: :author_id
  end
end
