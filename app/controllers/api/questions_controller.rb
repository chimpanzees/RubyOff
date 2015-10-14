class Api::QuestionsController < ApplicationController
  before_filter :require_signed_in!

  def index
    @questions = Question.all()
  end

  def create
    render json: {}
  end

  def destroy
    render json: {}
  end

  def show
    @question = Question.find(params[:id])
  end
end
