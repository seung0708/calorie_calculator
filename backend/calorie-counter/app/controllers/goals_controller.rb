class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  # GET /users
  def index
    @goals = Goal.all

    render json: @goals
  end

  # GET /users/1
  def show
    render json: @goal
  end

  # POST /users
  def create
    @goal = Goal.new(goal_params)

    if @goal.save
      render json: @goal, status: :created, location: @goal
    else
      render json: @goal.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @goal.update(goal_params)
      render json: @goal
    else
      render json: @goal.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @goal.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_goal
      @goal = Goal.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def goal_params
      params.require(:goal).permit(:activity_level, :plan)
    end
end
