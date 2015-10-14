class Api::SandboxesController < ApplicationController
  before_filter :require_signed_in!

  def create
    question = params[:question]
    solution = params[:solution]
    tests = params[:tests]
    result = Sandbox.runTests(solution, tests)
    render json: result
  end
end
