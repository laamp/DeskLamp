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
    @hubs = current_user.hubs
    
    render :index
  end

  def show

  end

  private
  def hub_params
    params.require(:hub).permit(:name, :description, :hub_type, :organization_id)
  end
end
