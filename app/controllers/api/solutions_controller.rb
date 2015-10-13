class Api::SolutionsController < ApplicationController
  def create
    @solution = Solution.new(solution_params)
    render json: @solution
  end

  def index
    @solutions = Solution.all_for_question(solution_params[:question_id])
    render json: @solutions
  end

  private

  def solution_params
    params.require(:solution).permit(:body, :author_id, :question_id)
  end
end
