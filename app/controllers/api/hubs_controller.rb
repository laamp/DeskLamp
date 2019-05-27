class Api::HubsController < ApplicationController
  def new
    @hub = Hub.new
  end
  
  def create
    @hub = Hub.new(hub_params)

    if @hub.save
      render json: @hub
    else
      render json: @hub.errors.full_messages, status: 422
    end
  end

  def index
    current_org = current_user.organizations.find_by_id(params[:orgId])

    if !current_org
      render json: ["You are not a part of that organization"], status: 403
    else
      @hubs = current_org.hubs
      render :index
    end
  end

  def show

  end

  private
  def hub_params
    params.require(:hub).permit(:name, :description, :hub_type, :organization_id)
  end
end
