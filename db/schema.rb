# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_06_10_200924) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "events", force: :cascade do |t|
    t.integer "author_id", null: false
    t.text "notes", null: false
    t.date "start_date"
    t.date "end_date"
    t.integer "schedule_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_events_on_author_id"
    t.index ["schedule_id"], name: "index_events_on_schedule_id"
  end

  create_table "hubs", force: :cascade do |t|
    t.string "name", null: false
    t.text "description"
    t.integer "organization_id", null: false
    t.string "hub_type", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["organization_id"], name: "index_hubs_on_organization_id"
  end

  create_table "message_board_posts", force: :cascade do |t|
    t.string "category"
    t.string "title", null: false
    t.text "body", null: false
    t.integer "author_id", null: false
    t.integer "message_board_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_message_board_posts_on_author_id"
    t.index ["message_board_id"], name: "index_message_board_posts_on_message_board_id"
  end

  create_table "message_boards", force: :cascade do |t|
    t.integer "hub_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["hub_id"], name: "index_message_boards_on_hub_id"
  end

  create_table "organizations", force: :cascade do |t|
    t.string "name", null: false
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_organizations_on_name", unique: true
  end

  create_table "schedules", force: :cascade do |t|
    t.integer "hub_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["hub_id"], name: "index_schedules_on_hub_id"
  end

  create_table "todo_list_collections", force: :cascade do |t|
    t.integer "hub_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["hub_id"], name: "index_todo_list_collections_on_hub_id"
  end

  create_table "todo_lists", force: :cascade do |t|
    t.string "name", null: false
    t.text "details"
    t.integer "todo_collection_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["todo_collection_id"], name: "index_todo_lists_on_todo_collection_id"
  end

  create_table "todo_tasks", force: :cascade do |t|
    t.string "name", null: false
    t.boolean "done", default: false, null: false
    t.integer "assignee_id", null: false
    t.integer "author_id", null: false
    t.integer "todo_list_id", null: false
    t.date "due_date", null: false
    t.text "details"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["assignee_id"], name: "index_todo_tasks_on_assignee_id"
    t.index ["author_id"], name: "index_todo_tasks_on_author_id"
    t.index ["todo_list_id"], name: "index_todo_tasks_on_todo_list_id"
  end

  create_table "user_to_organizations", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "organization_id", null: false
    t.boolean "admin", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["organization_id"], name: "index_user_to_organizations_on_organization_id"
    t.index ["user_id"], name: "index_user_to_organizations_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "name", null: false
    t.string "company_name"
    t.string "job_title"
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "avatar_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  add_foreign_key "events", "schedules"
  add_foreign_key "events", "users", column: "author_id"
  add_foreign_key "hubs", "organizations"
  add_foreign_key "message_board_posts", "message_boards"
  add_foreign_key "message_board_posts", "users", column: "author_id"
  add_foreign_key "message_boards", "hubs"
  add_foreign_key "schedules", "hubs"
  add_foreign_key "todo_list_collections", "hubs"
  add_foreign_key "todo_lists", "todo_list_collections", column: "todo_collection_id"
  add_foreign_key "todo_tasks", "todo_lists"
  add_foreign_key "todo_tasks", "users", column: "assignee_id"
  add_foreign_key "todo_tasks", "users", column: "author_id"
  add_foreign_key "user_to_organizations", "organizations"
  add_foreign_key "user_to_organizations", "users"
end
