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
hub1_info = { 
  name: "DeskLamp Home", 
  description: "A place for company-wide announcements and things that everyone should be aware of", 
  organization_id: default_org.id, 
  hub_type: "company" 
}
hub1 = Hub.create(hub1_info)

hub2_info = { 
  name: "Trello Home", 
  description: "A place for company-wide announcements and things that everyone should be aware of", 
  organization_id: other_org.id, 
  hub_type: "company" 
}
hub2 = Hub.create(hub2_info)

hub3_info = { 
  name: "Default Team", 
  description: "An example of a group specific to a team at your company", 
  organization_id: default_org.id, 
  hub_type: "team"
}
hub3 = Hub.create(hub3_info)

hub4_info = { 
  name: "Default Team", 
  description: "An example of a group specific to a team at your company", 
  organization_id: other_org.id, 
  hub_type: "team" 
}
hub4 = Hub.create(hub4_info)

hub5_info = { 
  name: "Default Project", 
  description: "An example of a group specific to a project in development within your company", 
  organization_id: default_org.id, 
  hub_type: "project" 
}
hub5 = Hub.create(hub5_info)

hub6_info = { 
  name: "Default Project", 
  description: "An example of a group specific to a project in development within your company", 
  organization_id: other_org.id, 
  hub_type: "project" 
}
hub6 = Hub.create(hub6_info)

# Message Boards
desklamp_message_board_info = { hub_id: hub1.id }
desklamp_message_board = MessageBoard.create(desklamp_message_board_info)

trello_message_board_info = { hub_id: hub2.id }
trello_message_board = MessageBoard.create(trello_message_board_info)

desklamp_team_message_board_info = { hub_id: hub3.id }
desklamp_team_message_board = MessageBoard.create(desklamp_team_message_board_info)

trello_team_message_board_info = { hub_id: hub4.id }
trello_team_message_board = MessageBoard.create(trello_team_message_board_info)

desklamp_project_message_board_info = { hub_id: hub5.id }
desklamp_project_message_board = MessageBoard.create(desklamp_project_message_board_info)

trello_project_message_board_info = { hub_id: hub6.id }
trello_project_message_board = MessageBoard.create(trello_project_message_board_info)

# Message Board Posts
post1_info = { 
  category: "Important",
  title: "Lunch Room",
  body: "Fridge is cleared out every Friday",
  author_id: guest.id,
  message_board_id: desklamp_message_board.id
}
post1 = MessageBoardPost.create(post1_info)
post2_info = { 
  category: "Standard",
  title: "Git Commits",
  body: "Make sure to add a commit message",
  author_id: guest.id,
  message_board_id: desklamp_message_board.id
}
post2 = MessageBoardPost.create(post2_info)
post3_info = { 
  category: "Fun",
  title: "Game Night",
  body: "Game night is every Wednesday after work",
  author_id: guest.id,
  message_board_id: desklamp_message_board.id
}
post3 = MessageBoardPost.create(post3_info)

post4_info = { 
  category: "Fun", 
  title: "4th of July", 
  body: "Cookout and fireworks start at 7pm", 
  author_id: user1.id, 
  message_board_id: trello_message_board.id 
}
post4 = MessageBoardPost.create(post4_info)

# Todo List Collections
desklamp_todo_coll_info = { hub_id: hub1.id }
desklamp_todo_coll = TodoListCollection.create(desklamp_todo_coll_info)

trello_todo_coll_info = { hub_id: hub2.id }
trello_todo_coll = TodoListCollection.create(trello_todo_coll_info)

desklamp_team_todo_coll_info = { hub_id: hub3.id }
desklamp_todo_coll = TodoListCollection.create(desklamp_team_todo_coll_info)

trello_team_todo_coll_info = { hub_id: hub4.id }
trello_todo_coll = TodoListCollection.create(trello_team_todo_coll_info)

desklamp_project_todo_coll_info = { hub_id: hub5.id }
desklamp_todo_coll = TodoListCollection.create(desklamp_project_todo_coll_info)

trello_project_todo_coll_info = { hub_id: hub6.id }
trello_todo_coll = TodoListCollection.create(trello_project_todo_coll_info)

# Todo Lists
todo_list1_info = { 
  name: "Todo List 1",
  details: "Stuff to do!!!", 
  todo_collection_id: desklamp_todo_coll.id 
}
todo_list2_info = { 
  name: "Todo List 2", 
  details: "Trello to do list", 
  todo_collection_id: trello_todo_coll.id 
}
todo_list1 = TodoList.create(todo_list1_info)
todo_list2 = TodoList.create(todo_list2_info)

# Todo Tasks
task1_info = { 
  done: false, 
  due_date: "01-12-2022", 
  name: "TASK NAME 1", 
  details: "Do a thing", 
  assignee_id: guest.id, 
  author_id: user1.id, 
  todo_list_id: todo_list1.id 
}
task2_info = { 
  done: false, 
  due_date: "01-12-2022", 
  name: "TASK NAME 2", 
  details: "Do a second thing", 
  assignee_id: user1.id, 
  author_id: guest.id, 
  todo_list_id: todo_list1.id 
}
task3_info = { 
  done: false, 
  due_date: "01-12-2022", 
  name: "TASK NAME 3", 
  details: "Dance", 
  assignee_id: guest.id, 
  author_id: user1.id, 
  todo_list_id: todo_list1.id 
}
task4_info = { 
  done: false, 
  due_date: "01-12-2022", 
  name: "TASK NAME 4", 
  details: "Yell", 
  assignee_id: user1.id, 
  author_id: guest.id, 
  todo_list_id: todo_list2.id 
}
task5_info = { 
  done: false, 
  due_date: "01-12-2022", 
  name: "TASK NAME 5", 
  details: "a t t a c", 
  assignee_id: guest.id, 
  author_id: user1.id, 
  todo_list_id: todo_list2.id 
}
task6_info = { 
  done: false, 
  due_date: "01-12-2022", 
  name: "TASK NAME 6", 
  details: "Flee", 
  assignee_id: user1.id, 
  author_id: guest.id, 
  todo_list_id: todo_list2.id 
}

task1 = TodoTask.create(task1_info)
task2 = TodoTask.create(task2_info)
task3 = TodoTask.create(task3_info)
task4 = TodoTask.create(task4_info)
task5 = TodoTask.create(task5_info)
task6 = TodoTask.create(task6_info)

# Schedules
desklamp_schedule_info = { hub_id: hub1.id }
desklamp_schedule = Schedule.create(desklamp_schedule_info)

trello_schedule_info = { hub_id: hub2.id }
trello_schedule = Schedule.create(trello_schedule_info)

desklamp_team_schedule_info = { hub_id: hub3.id }
desklamp_team_schedule = Schedule.create(desklamp_team_schedule_info)

trello_team_schedule_info = { hub_id: hub4.id }
trello_team_schedule = Schedule.create(trello_team_schedule_info)

desklamp_project_schedule_info = { hub_id: hub5.id }
desklamp_project_schedule = Schedule.create(desklamp_project_schedule_info)

trello_project_schedule_info = { hub_id: hub6.id }
trello_project_schedule = Schedule.create(trello_project_schedule_info)

# Events
event1_info = { 
  author_id: guest.id, 
  notes: "Company holiday", 
  start_date: "02-18-1970", 
  end_date: "01-08-0900", 
  schedule_id: desklamp_schedule.id 
}
event2_info = { 
  author_id: user1.id, 
  notes: "Time travel", 
  start_date: "01-01-1970", 
  end_date: "01-08-1177", 
  schedule_id: trello_schedule.id 
}

event1 = Event.create(event1_info)
event2 = Event.create(event2_info)
