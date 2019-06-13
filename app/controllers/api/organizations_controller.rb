class Api::OrganizationsController < ApplicationController
  def create
    @organization = Organization.new(organization_params)
    
    ActiveRecord::Base.transaction do
      # update their job title
      current_user.job_title = params[:organization][:jobTitle]
      current_user.save

      # create organization
      @organization.save
      
      # create default company hub for new organization
      hub_desc = "Default workspace for " + @organization.name
      hub_info = { name: @organization.name, description: hub_desc,
        organization_id: @organization.id, hub_type: "company" }
      @hub = Hub.new(hub_info)
      @hub.save

      # create user to org record for joins table
      joins_info = { user_id: current_user.id, organization_id: @organization.id, admin: true }
      @user_to_org = UserToOrganization.new(joins_info)
      @user_to_org.save

      render :show
      return
    end

    render json: @organization.errors.full_messages, status: 422
  end

  def index
    @organizations = current_user.organizations

    render :index
  end

  def show
    @organization = Organization.find(params[:id])

    render :show
  end

  def new
    @organization = Organization.new
  end

  private
  def organization_params
    params.require(:organization).permit(:name, :description)
  end
end
