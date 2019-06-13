json.set! event.id do
  json.extract! event, :id, :author_id, :notes, :start_date, :end_date, :schedule_id
end
