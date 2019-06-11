# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Users
guest_info = { email: "fake_email@desklamp.com", name: "D. Hansson", password: "password" }
guest = User.create(guest_info)

user1_info = { email: "user1@desklamp.com", name: "User 1", password: "password" }
user1 = User.create(user1_info)

# Organizations
default_org_info = { name: "DeskLamp", description: "The default workspace" }
default_org = Organization.create(default_org_info)

other_org_info = { name: "Trello", description: "DeskLamp's competitor" }
other_org = Organization.create(other_org_info)

# Users <=> Organizations
guest_to_default_org = { user_id: guest.id, organization_id: default_org.id, admin: true }
UserToOrganization.create(guest_to_default_org)

user1_to_default_org = { user_id: user1.id, organization_id: default_org.id, admin: false }
UserToOrganization.create(user1_to_default_org)

guest_to_other_org = { user_id: guest.id, organization_id: other_org.id, admin: true }
UserToOrganization.create(guest_to_other_org)

# Hubs
hub1_info = { name: "DeskLamp Home", description: "Main hub for DeskLamp", organization_id: default_org.id, hub_type: "company" }
hub1 = Hub.create(hub1_info)

hub2_info = { name: "Trello Home", description: "Main hub for Trello", organization_id: other_org.id, hub_type: "company" }
hub2 = Hub.create(hub2_info)

# Message Boards
desklamp_message_board_info = { hub_id: hub1.id }
desklamp_message_board = MessageBoard.create(desklamp_message_board_info)

trello_message_board_info = { hub_id: hub2.id }
trello_message_board = MessageBoard.create(trello_message_board_info)

# Message Board Posts
post1_info = { category: "Important", title: "Lunch Room", body: "Fridge is cleared out every Friday", author_id: guest.id , message_board_id: desklamp_message_board.id }
post1 = MessageBoardPost.create(post1_info)

post2_info = { category: "Fun", title: "4th of July", body: "Cookout and fireworks start at 7pm", author_id: user1.id , message_board_id: trello_message_board.id }
post2 = MessageBoardPost.create(post2_info)

# Todo List Collection
desklamp_todo_coll_info = { hub_id: hub1.id }
desklamp_todo_coll = TodoListCollection.create(desklamp_todo_coll_info)

trello_todo_coll_info = { hub_id: hub2.id }
trello_todo_coll = TodoListCollection.create(trello_todo_coll_info)

# Schedules
desklamp_schedule_info = { hub_id: hub1.id }
desklamp_schedule = Schedule.create(desklamp_schedule_info)

trello_schedule_info = { hub_id: hub2.id }
trello_schedule = Schedule.create(trello_schedule_info)
