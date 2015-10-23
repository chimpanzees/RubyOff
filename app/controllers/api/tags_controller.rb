class Api::TagsController < ApplicationController
  def index
    @tags = Tag.unique_tags()
  end
end
