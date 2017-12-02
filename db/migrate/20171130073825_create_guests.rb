class CreateGuests < ActiveRecord::Migration[5.1]
  def change
    create_table :guests do |t|
      t.references :reservation, foreign_key: true
      t.string :name
      t.string :email, null: false
      t.string :address
      t.string :phone

      t.timestamps
    end
  end
end
