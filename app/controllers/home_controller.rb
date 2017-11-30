class HomeController < ApplicationController
  def index
  end
  def events
    @reserves = Reservation.all
    Rails.logger.debug(@reserves.to_json(only: [:usage, :start_at, :end_at]))
  end
end
