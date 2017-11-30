json.extract! reservation, :id, :user_id, :start_at, :end_at, :usage, :created_at, :updated_at
json.url reservation_url(reservation, format: :json)
