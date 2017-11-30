class ReservationsController < ApplicationController
  load_and_authorize_resource

  def index
  end

  def show
  end

  def new
    @reservation = Reservation.new
  end

  def edit
  end

  def create
    @reservation = Reservation.new(reservation_params.merge(user: current_user))

    respond_to do |format|
      if @reservation.save
        ReservationMailer.send_create_reservation(@reservation).deliver
        format.html { redirect_to @reservation, notice: 'Reservation was successfully created.' }
        format.json { render :show, status: :created, location: @reservation }
      else
        format.html { render :new }
        format.json { render json: @reservation.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @reservation.update(reservation_params)
        format.html { redirect_to @reservation, notice: 'Reservation was successfully updated.' }
        format.json { render :show, status: :ok, location: @reservation }
      else
        format.html { render :edit }
        format.json { render json: @reservation.errors, status: :unprocessable_entity }
      end
    end
  end
  
  def destroy
    @reservation.destroy
    respond_to do |format|
      format.html { redirect_to reservations_url, notice: 'Reservation was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Never trust parameters from the scary internet, only allow the white list through.
    def reservation_params
      params.require(:reservation).permit(:start_at, :end_at, :usage)
    end
end
