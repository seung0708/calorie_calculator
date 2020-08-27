class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.integer :age
      t.string  :gender
      t.integer :weight
      t.integer :height

     
      
      t.timestamps
    end
  end
end
