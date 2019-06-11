class Api::TodoListCollectionsController < ApplicationController
  def show
    @todo_collection = TodoListCollection.find(params[:id])

    if @todo_collection
      render json: @todo_collection
    else
      render json: ["Todo collection not found"], status: 404
    end
  end
end
