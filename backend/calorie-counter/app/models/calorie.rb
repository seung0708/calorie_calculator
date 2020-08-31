class Calorie < ApplicationRecord
    has_many :goals, dependent: :destroy
    validates_presence_of :age
    

end
