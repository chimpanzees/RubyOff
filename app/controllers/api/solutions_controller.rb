class Api::SolutionsController < ApplicationController
  before_filter :require_signed_in!

  def create
    author_id = current_user.id
    question_id = params[:questionId]
    body = params[:body]
    tests = params[:tests]
    results = Sandbox.runTests(body, tests)
    passing = results.all? { |result| result == {success: true} }
    if passing
      @solution = Solution.new({
        author_id: author_id,
        question_id: question_id,
        body: body
      })
      if @solution.save
        render json: {saved: true, solution: @solution}
      else
        render json: {saved: false}
      end
    else
      # Did not pass all tests
      json_obj = {}
      results.each_with_index do |result, i|
        json_obj["test_#{i}"] = result
      end
      render json: json_obj
    end
  end

  def index
    @solutions = Solution.all_for_question(params[:question_id])
    render json: @solutions
  end
end
