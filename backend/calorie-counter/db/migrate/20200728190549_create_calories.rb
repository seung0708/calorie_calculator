class CreateCalories < ActiveRecord::Migration[6.0]
  def change
    create_table :calories do |t|
      t.integer :age
      t.string  :gender
      t.float   :weight
      t.integer :height
      t.float   :total_calories
      
      t.timestamps
    end
  end
end
