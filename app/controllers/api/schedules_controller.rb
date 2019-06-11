class Api::SchedulesController < ApplicationController
  def show
    @schedule = Schedule.find(params[:id])

    if @schedule
      render json: @schedule
    else
      render json: ["Schedule not found"], status: 404
    end
  end
end
