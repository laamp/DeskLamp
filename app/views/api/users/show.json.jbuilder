json.partial! "api/users/user", user: @user

json.organizations do
  json.partial! "api/organizations/organization", collection: @user.organizations
end
