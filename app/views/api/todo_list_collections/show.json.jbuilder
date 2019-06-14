json.set! @todo_collection.id do
  json.extract! @todo_collection, :id, :hub_id
end
