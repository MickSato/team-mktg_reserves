class GuestMailer < ApplicationMailer
  default from: "system@example.com"
  
  def send_to_admin(guest)
    @guest = guest
    mail(subject: "宿泊者情報入力", to: User.admin.pluck(:email))
  end
end
