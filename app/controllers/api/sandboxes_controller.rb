class Api::SandboxesController < ApplicationController
  before_filter :require_signed_in!

  def create
    body = params[:body]
    tests = params[:tests]
    results = Sandbox.runTests(body, tests)
    json_obj = {}
    results.each_with_index do |result, i|
      json_obj["test_#{i}"] = result
    end
    render json: json_obj
  end
end
