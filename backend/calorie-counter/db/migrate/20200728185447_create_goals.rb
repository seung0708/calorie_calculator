class CreateGoals < ActiveRecord::Migration[6.0]
  def change
    create_table :goals do |t|
      t.string  :activity_level
      t.string  :plan
      t.belongs_to :calorie

      t.timestamps
    end
  end
end
