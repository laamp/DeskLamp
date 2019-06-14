json.set! todo_list.id do
  json.extract! todo_list, :id, :name, :details, :todo_collection_id
end
