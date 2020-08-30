class CreateGoals < ActiveRecord::Migration[6.0]
  def change
    create_table :goals do |t|
      t.string  :goal_level
      t.integer  :total_calories
      t.belongs_to :calorie

      t.timestamps
    end
  end
end
