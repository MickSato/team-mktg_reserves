class AddStatusToReservation < ActiveRecord::Migration[5.1]
  def change
    add_column :reservations, :status, :integer, default: 0
  end
end
