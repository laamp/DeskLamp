class Api::SchedulesController < ApplicationController
  def show
    hub = Hub.find(params[:id])
    @schedule = hub.schedule

    if @schedule
      render :show
    else
      render json: ["Schedule not found"], status: 404
    end
  end
end
