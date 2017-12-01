class ReservationMailer < ApplicationMailer
  default from: "system@example.com"

  def send_create_reservation(reservation)
    @user = reservation
    mail(subject: "新規予約申請", to: User.admin.pluck(:email)) do |format|
      format.text
    end
  end
end
