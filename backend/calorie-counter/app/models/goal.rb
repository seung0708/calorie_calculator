class Goal < ApplicationRecord
    belongs_to :calorie
    accepts_nested_attributes_for :calorie
end
