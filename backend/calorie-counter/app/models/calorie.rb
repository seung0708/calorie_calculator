class Calorie < ApplicationRecord
    has_many :goals, dependent: :destroy
     
    

end
