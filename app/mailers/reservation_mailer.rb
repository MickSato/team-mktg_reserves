class ReservationMailer < ApplicationMailer
  include Rails.application.routes.url_helpers
  default from: "system@example.com"

  def send_to_admin(reservation)
    @reservation = reservation
    mail(subject: "新規予約申請", to: User.admin.pluck(:email))
  end
  
  def send_to_guest(guest)
    @guest = guest
    @path = edit_guest_url(guest.url_key)
    mail(subject: "ご宿泊予定について", to: guest.email)
  end
end
