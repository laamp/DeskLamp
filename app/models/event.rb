class Event < ApplicationRecord
  validates :author_id, :schedule_id, :notes, presence: true

  belongs_to :schedule,
  primary_key: :id,
  foreign_key: :schedule_id,
  class_name: :Schedule

  belongs_to :user,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :User
end
