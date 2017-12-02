class Guest < ApplicationRecord
    belongs_to :reservation
    
    validates :email, presence: true
    validates :url_key, presence: true, uniqueness: true
end
