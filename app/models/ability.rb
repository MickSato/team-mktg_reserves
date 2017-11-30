class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new
    if user.admin?
      can :manage, :all
      cannot :create, Reservation
    end

    if user.member?
      can :manage, Reservation, user: user
      can :update, user
      can :read, :all
    end
  end
end
