class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  # GET /calories
  def index
    @users = User.all

    render json: @users, include: [:goals]
  end

  # GET /calories/1
  def show
    render json: @user, status: 200
  end

  # POST /calories
  def create
    #binding.pry
    @user = User.new(user_params)  
      if @user.save
        render json: @user, include: [:goals], status: 200
      else 
        render json: ("Calorie not saved").to_json
      end 
  end

  # PATCH/PUT /calories/1
  def update
    @user.update(calory_params)

    render json: @user, status: 200
  end

  # DELETE /calories/1
  def destroy
    @user.destroy

    render json: {calorieId: @userid}
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(
          :age, 
          :gender, 
          :weight, 
          :height,
          goals_attributes: [
            :goal_level,
            :total_calories
          ]
          )
    end
end
