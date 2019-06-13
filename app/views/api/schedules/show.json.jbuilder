json.set! @schedule.id do
  json.extract! @schedule, :id, :hub_id
end
