class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    # If this is a demo user
    if user_params[:username] == "DEMO_USER_FLAG"
      # Use Faker to create a fake username
      demo_username = Faker::Internet.user_name
      @user = User.new({:username => demo_username, :password => "alkdjfalsdj"})
    else
      @user = User.new(user_params)
    end
    if @user.save
      sign_in(@user)
      if params[:outcomeType] == "JS"
        render :js => "window.location = '#{root_path}'"
      else
        redirect_to root_url
      end
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
