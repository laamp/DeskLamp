class Hub < ApplicationRecord
  validates :name, :organization_id, presence: true
  validates :hub_type, presence: true, inclusion: { in: %w(company team project) }

  belongs_to :organization,
  primary_key: :id,
  foreign_key: :organization_id,
  class_name: :Organization
end
