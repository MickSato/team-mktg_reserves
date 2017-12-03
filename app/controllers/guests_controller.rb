class GuestsController < ApplicationController
  before_action :set_guest, only: [:update, :destroy]
  skip_before_action :require_login, except: [:index, :destroy]

  def index
    @guests = Guest.all
  end

  def show
  end

  def edit
    @guest = Guest.find_by_url_key(params[:id])
  end

  def update
    @guest = Guest.find(params[:id])
    if @guest.update(guest_params)
      redirect_to :thanks
    else
      render :edit
    end
  end

  def destroy
    @guest.destroy
    respond_to do |format|
      format.html { redirect_to guests_url, notice: 'Guest was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_guest
      @guest = Guest.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def guest_params
      params.require(:guest).permit(:name, :email, :address, :phone)
    end
end
