class Reservation < ApplicationRecord
  belongs_to :user
  has_many :guests
  
  validates :usage, :start_at, :end_at, presence: true
  
  enum status: {applying: 0, approved: 1, unapproved: 2}
end
