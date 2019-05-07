json.set! organization.id do
  json.extract! organization, :id, :name, :description
end
