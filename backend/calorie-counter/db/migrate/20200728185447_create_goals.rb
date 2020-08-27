class CreateGoals < ActiveRecord::Migration[6.0]
  def change
    create_table :goals do |t|
      t.string  :goal_level
      t.string  :total_calories
      t.belongs_to :user

      t.timestamps
    end
  end
end
