class UserToOrganization < ApplicationRecord
  validates :user_id, :organization_id, presence: true

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

  belongs_to :organization,
  primary_key: :id,
  foreign_key: :organization_id,
  class_name: :Organization
end
