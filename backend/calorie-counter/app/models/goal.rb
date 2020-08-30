class Goal < ApplicationRecord
    belongs_to :calorie, optional: true
    
    validate do 
        goal_error
    end 
   
    private 
    def goal_error
        if self.goal_level == "0"
            self.errors.add(:error, "Not a valid Goal")
        end 
    end

end
