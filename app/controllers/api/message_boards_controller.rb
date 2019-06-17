class Api::MessageBoardsController < ApplicationController
  def show
    hub = Hub.find(params[:id])
    @message_board = hub.message_board

    if @message_board
      render :show
    else
      render json: ["Message board not found"], status: 404
    end
  end
end
