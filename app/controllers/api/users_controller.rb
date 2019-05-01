class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render json: @user
      # render json: "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def new
    @user = User.new
  end

  private
  def user_params
    params.require(:user).permit(:email, :name, :password)
  end
end
