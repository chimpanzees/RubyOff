class Api::QuestionsController < ApplicationController
  def index
    @questions = Question.all()
    render json: @questions
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
