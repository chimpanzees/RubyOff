class Api::QuestionsController < ApplicationController
  before_filter :require_signed_in!

  def index
    tags = params[:tags]
    if tags.nil?
      tags = []
    end
    @questions = Question.questions_from_tags(tags)
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
