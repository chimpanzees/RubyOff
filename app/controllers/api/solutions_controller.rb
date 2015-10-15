class Api::SolutionsController < ApplicationController
  before_filter :require_signed_in!

  def create
    author_id = current_user.id
    body = params[:body]
    tests = params[:tests]
    output = params[:output]
    results = Sandbox.runTests(body, tests)
    fail
    resultsHash = {}
    results.each_with_index do |result, i|
      resultsHash["test_#{i}"] = result
    end
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
