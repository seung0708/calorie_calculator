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
    #binding.pry  
    @calorie = Calorie.last
    @goal = @calorie.goals.build(goal_params)
   
    render json: @goal.save ? @goal : {message: @goal.errors.messages[:error][0]}
  end

  def update
    if @goal.update(goal_params)
      #binding.pry
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
        :id,
        :goal_level,
        :total_calories
        )
    end
end
