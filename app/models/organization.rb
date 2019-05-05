class Organization < ApplicationRecord
  validates :name, presence: true

  has_many :user_to_organizations,
  primary_key: :id,
  foreign_key: :organization_id,
  class_name: :UserToOrganization

  has_many :users,
  through: :user_to_organizations,
  source: :user
end
