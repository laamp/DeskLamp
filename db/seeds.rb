# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

guest = { email: "fake_email@desklamp.com", name: "D. Hansson", password: "password" }
user = User.create(guest)

default_org = { name: "DeskLamp", description: "The default workspace" }
org = Organization.create(default_org)

guest_to_default_org = { user_id: user.id, organization_id: org.id, admin: true }
UserToOrganization.create(guest_to_default_org)
