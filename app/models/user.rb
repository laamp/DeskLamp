class User < ApplicationRecord
  validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :name, :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token

  has_many :user_to_organizations,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :UserToOrganization

  has_many :organizations,
  through: :user_to_organizations,
  source: :organization

  attr_reader :password
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)

    if user && user.is_password?(password)
      return user
    end
    return nil
  end

  def ensure_session_token
    self.session_token = generate_session_token
  end

  def reset_session_token
    self.session_token = generate_session_token
    self.save
    self.session_token
  end

  private
  def generate_session_token
    SecureRandom.urlsafe_base64(16)
  end
end
