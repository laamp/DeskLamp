json.set! user.id do
  json.extract! user, :id, :email, :name, :job_title, :company_name
end
