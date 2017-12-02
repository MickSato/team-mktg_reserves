class AddUrlKeyToGuest < ActiveRecord::Migration[5.1]
  def change
    add_column :guests, :url_key, :string
    add_index :guests, :url_key, unique: true
  end
end
