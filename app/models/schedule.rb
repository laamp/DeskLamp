class Schedule < ApplicationRecord
  validates :hub_id, presence: true

  has_many :events,
  primary_key: :id,
  foreign_key: :schedule_id,
  class_name: :Event

  belongs_to :hub,
  primary_key: :id,
  foreign_key: :hub_id,
  class_name: :Hub
end
