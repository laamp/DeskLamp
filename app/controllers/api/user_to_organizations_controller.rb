class Api::UserToOrganizationsController < ApplicationController
  def create
    @user_to_organization = UserToOrganization.new(user_org_params)

    if @user_to_organization.save

    else
      render json: @user_to_organization.errors.full_messages, status: 500
    end
  end

  private
  def user_org_params
    params.require(:user_to_organization).permit(:user_id, :organization_id, :admin)
  end
end
