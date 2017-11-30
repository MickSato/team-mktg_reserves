class HomeController < ApplicationController
  def index
  end
  def events
    @reserves = can?(:manage, Reservation) ? Reservation.all : Reservation.where(user: current_user)
    Rails.logger.debug(@reserves.to_json(only: [:usage, :start_at, :end_at]))
  end
end
