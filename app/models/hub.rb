class Hub < ApplicationRecord
  validates :name, :organization_id, presence: true
  validates :hub_type, presence: true, inclusion: { in: %w(company team project) }

  has_one :message_board,
  primary_key: :id,
  foreign_key: :hub_id,
  class_name: :MessageBoard

  has_one :schedule,
  primary_key: :id,
  foreign_key: :hub_id,
  class_name: :Schedule

  has_one :todo_list_collection,
  primary_key: :id,
  foreign_key: :hub_id,
  class_name: :TodoListCollection

  belongs_to :organization,
  primary_key: :id,
  foreign_key: :organization_id,
  class_name: :Organization
end
