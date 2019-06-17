class Api::OrganizationsController < ApplicationController
  def create
    @organization = Organization.new(organization_params)
    
    ActiveRecord::Base.transaction do
      # update their job title
      current_user.job_title = params[:organization][:jobTitle]
      current_user.company_name = params[:organization][:name]
      current_user.save

      # create organization
      if !Organization.exists?(:name=>@organization.name)
        @organization.save

        # create default company hub for new organization
        hub_desc = "A place for company-wide announcements and things that
        everyone should be aware of";
        hub_info = { name: @organization.name, description: hub_desc,
          organization_id: @organization.id, hub_type: "company" }
        @hub = Hub.new(hub_info)
        @hub.save

        hub_info_team = {
          name: "Default Team",
          description: "An example of a group specific to a team at your 
          company",
          organization_id: @organization.id,
          hub_type: "team"
        };
        Hub.create(hub_info_team);

        hub_info_project = {
          name: "Default Project",
          description: "An example of a group specific to a project in 
          development within your company",
          organization_id: @organization.id,
          hub_type: "project"
        };
        Hub.create(hub_info_project);
      else
        @organization = Organization.find_by(name: params[:organization][:name])
      end
      

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
