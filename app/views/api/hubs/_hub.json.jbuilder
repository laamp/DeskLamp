json.set! hub.id do
  json.extract! hub, :id, :name, :description, :hub_type, :organization_id
end
