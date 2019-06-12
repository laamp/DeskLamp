class Api::MessageBoardsController < ApplicationController
  def show
    @message_board = MessageBoard.find(params[:id])

    if @message_board
      render json: @message_board
    else
      render json: ["Message board not found"], status: 404
    end
  end
end