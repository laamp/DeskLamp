class Api::OrganizationsController < ApplicationController
  def create
    @organization = Organization.new(organization_params)
    
    ActiveRecord::Base.transaction do
      # update their job title
      current_user.job_title = params[:organization][:jobTitle]
      current_user.save
      # create organization
      @organization.save
      
      # create user to org record for joins table
      joins_info = { user_id: current_user.id, organization_id: @organization.id, admin: true }
      @user_to_org = UserToOrganization.new(joins_info)
      @user_to_org.save
      render json: @organization
      return
    end

      render json: @organization.errors.full_messages, status: 422
  end

  def index
    @organizations = current_user.organizations

    render :index
  end

  def new
    @organization = Organization.new
  end

  private
  def organization_params
    params.require(:organization).permit(:name, :description)
  end
end
