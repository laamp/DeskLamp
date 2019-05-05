class Api::OrganizationsController < ApplicationController
  def create
    @organization = Organization.new(organization_params)

    if @organization.save
      
      render json: @organization
    else
      render json: @organization.errors.full_messages, status: 422
    end
  end

  def new
    @organization = Organization.new
  end

  private
  def organization_params
    params.require(:organization).permit(:name, :description)
  end
end
