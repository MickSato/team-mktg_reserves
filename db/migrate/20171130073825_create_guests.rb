class CreateGuests < ActiveRecord::Migration[5.1]
  def change
    create_table :guests do |t|
      t.string :name
      t.string :email
      t.string :address
      t.string :phone

      t.timestamps
    end
  end
end
