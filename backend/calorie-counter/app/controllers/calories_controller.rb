class CaloriesController < ApplicationController
  before_action :set_calorie, only: [:show, :update, :destroy]

  # GET /calories
  def index
    @calories = Calorie.all

    render json: @calories.to_json(:include => {
      :goals => {:only => [:id, :activity_level, :calorie_id]}
    },:except => [:created_at, :updated_at])
  end

  # GET /calories/1
  def show
    render json: @calorie.to_json(:include => {
      :goals => {:only => [:id, :activity_level, :calorie_id]}
    },:except => [:created_at, :updated_at]), status: 200
  end

  # POST /calories
  def create
    #binding.pry
    @calorie = Calorie.new(calory_params)
    @goals = Goal.create(activity_level: params[:activity_level])
    @calorie.goals << @goals
      if @calorie.save
        render json: @calorie, include: [:goals], status: 200
      else 
        render json: ("Calorie not saved").to_json
      end 
  end

  # PATCH/PUT /calories/1
  def update
    @calorie.update(calory_params)

    render json: @calorie, status: 200
  end

  # DELETE /calories/1
  def destroy
    @calorie.destroy

    render json: {calorieId: @calorie.id}
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_calorie
      @calorie = Calorie.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def calory_params
      params.require(:calory).permit(
          :age, 
          :gender, 
          :weight, 
          :height, 
          :total_calories,
          goals_attributes: [
            :activity_level
          ])
    end
end
