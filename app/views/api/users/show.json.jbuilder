json.partial! "api/users/user", user: @user

json.organizations do
  @user.organizations.each do |organization|
    json.set! organization.id do
      json.extract! organization, :id, :name, :description
    end
  end
end
