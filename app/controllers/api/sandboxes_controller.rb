class Api::SandboxesController < ApplicationController
  before_filter :require_signed_in!

  def create
    body = params[:body]
    tests = params[:tests]
    results = Sandbox.runTests(body, tests)
    render json: results
  end
end
