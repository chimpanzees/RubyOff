class Api::SolutionsController < ApplicationController
  before_filter :require_signed_in!

  def create
    # Grab the current user and include it!
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
