class CreateReservations < ActiveRecord::Migration[5.1]
  def change
    create_table :reservations do |t|
      t.references :user, foreign_key: true
      t.date :start_at
      t.date :end_at
      t.string :usage

      t.timestamps
    end
  end
end
