class CreateEquipment < ActiveRecord::Migration
  def change
    create_table :equipment do |t|
      t.string :name
      t.string :code
      t.string :image_url
      t.string :collada_url

      t.timestamps null: false
    end
  end
end
