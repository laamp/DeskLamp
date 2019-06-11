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
      render json: ["You are not a part of that organization"], status: 401
    else
      @hubs = current_org.hubs
      render :index
    end
  end

  def show
    @hub = Hub.find_by_id(params[:id])

    if @hub
      render @hub
    elsif @hub.nil?
      render json: ["Hub not found"], status: 404
    else
      render json: @hub.errors.full_messages, status: 404
    end
  end

  def edit
    @hub = Hub.find(params[:id])

    if @hub
      render json: @hub
    else
      render json: @hub.errors.full_messages, status: 404
    end
  end

  def update
    @hub = Hub.find(params[:id])

    if @hub.update(hub_params)
      render json: @hub
    else
      render json: @hub.errors.full_messages, status: 422
    end
  end

  def destroy
    @hub = Hub.find(params[:id])

    if @hub
      @hub.destroy()
      render json: ["Hub has been deleted"], status: 200
    else
      render json: ["No current user found"], status: 404 
    end
  end

  private
  def hub_params
    params.require(:hub).permit(:name, :description, :hub_type, :organization_id)
  end
end
