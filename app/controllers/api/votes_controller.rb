class Api::VotesController < ApplicationController
  before_filter :require_signed_in!

  def create
    author_id = current_user.id
    @vote = Vote.new({
      name: params[:vote_type],
      user_id: author_id,
      solution_id: params[:solution_id]
    })
    if @vote.save
      @solutions = Solution.all_for_question(params[:question_id])
      render json: @solutions
    else
      render json: {success: false}
    end
  end

  def index
    bpc = Vote.best_practices_count(params[:solution_id])
    cc = Vote.clever_count(params[:solution_id])
    render json: {best_practices_count: bpc, clever_count: cc}
  end

  def destroy
  end
end
