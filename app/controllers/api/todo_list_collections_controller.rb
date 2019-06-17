class Api::TodoListCollectionsController < ApplicationController
  def show
    hub = Hub.find(params[:id])
    @todo_collection = hub.todo_list_collection

    if @todo_collection
      render :show
    else
      render json: ["Todo collection not found"], status: 404
    end
  end
end
