class CreateCalories < ActiveRecord::Migration[6.0]
  def change
    create_table :calories do |t|
      t.integer :age
      t.string  :gender
      t.integer :weight
      t.integer :height
      t.integer :bmi
     
      
      t.timestamps
    end
  end
end
