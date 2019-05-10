# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

guest_info = { email: "fake_email@desklamp.com", name: "D. Hansson", password: "password" }
guest = User.create(guest_info)

user1_info = { email: "user1@desklamp.com", name: "User 1", password: "password" }
user1 = User.create(user1_info)

default_org_info = { name: "DeskLamp", description: "The default workspace" }
default_org = Organization.create(default_org_info)

other_org_info = { name: "BugLamp", description: "DeskLamp's competitor" }
other_org = Organization.create(other_org_info)

guest_to_default_org = { user_id: guest.id, organization_id: default_org.id, admin: true }
UserToOrganization.create(guest_to_default_org)

user1_to_default_org = { user_id: user1.id, organization_id: default_org.id, admin: false }
UserToOrganization.create(user1_to_default_org)

guest_to_other_org = { user_id: guest.id, organization_id: other_org.id, admin: true }
UserToOrganization.create(guest_to_other_org)

hub_info = { name: "DeskLamp Home", description: "Main hub for DeskLamp", organization_id: default_org.id, hub_type: "company" }
Hub.create(hub_info)

hub2_info = { name: "BugLamp Home", description: "Main hub for BugLamp", organization_id: other_org.id, hub_type: "company" }
Hub.create(hub2_info)
