class GoalsController < ApplicationController
  before_action :set_goal, only: [:show, :update, :destroy]

  def index
    @goals = Goal.all

    render json: @goals
  end

  def show
    render json: @goal
  end

  def create
    @goal = Goal.new(goal_params)

    if @goal.save
      render json: @goal, status: :created, location: @goal
    else
      render json: @goal.errors, status: :unprocessable_entity
    end
  end

  def update
    if @goal.update(goal_params)
      render json: @goal
    else
      render json: @goal.errors, status: :unprocessable_entity
    end
  end

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
      params.require(:goal).permit(
        :plan,
        :activity_level, 
        calorie_attributes: [
          :total_calories
      ])
    end
end
