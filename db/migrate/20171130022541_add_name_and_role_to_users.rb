class AddNameAndRoleToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :name, :string
    add_column :users, :role, :integer, null: false, default: 2
  end
end
