class CaloriesController < ApplicationController
  before_action :set_calorie, only: [:show, :update, :destroy]

  # GET /calories
  def index
    @calories = Calorie.all

    render json: @calories, include: [:goals]
  end

  # GET /calories/1
  def show
    render json: @calorie, status: 200
  end

  # POST /calories
  def create
    #binding.pry
    @calorie = Calorie.new(age: params[:age], 
                           gender: params[:gender], 
                           weight: params[:weight], 
                           height: params[:height],
                           bmi: params[:bmi]
    )
    if @calorie.save
      render json: @calorie
    end 
  end

  # PATCH/PUT /calories/1
  def update
    @calorie.update(calorie_params)

    render json: @calorie, status: 200
  end

  # DELETE /calories/1
  def destroy
    @calorie.destroy

    render json: {calorieId: @calorieid}
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_calorie
      @calorie = Calorie.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def calorie_params
      params.require(:calorie).permit(
          :age, 
          :gender, 
          :weight, 
          :height,
          :bmi
          )
    end
end
