class Api::TodoListsController < ApplicationController
  def create
    @todo_list = TodoList.new(todo_list_params)
    @todo_list.todo_collection_id = params[:todo_list_collection_id]

    if @todo_list.save
      render :show
    else
      render @todo_list.errors.full_messages, status: 422
    end
  end
  
  def index
    collection = TodoListCollection.find(params[:todo_list_collection_id])
    @todo_lists = collection.todo_lists

    render :index
  end

  def show
    collection = TodoListCollection.find(params[:todo_list_collection_id])
    @todo_list = collection.todo_lists.find(params[:id])

    if @todo_list
      render :show
    else
      render json: ["List not found"], status: 404
    end
  end

  def new
    @todo_list = TodoList.new

    render json: @todo_list
  end

  def update
    collection = TodoListCollection.find(params[:todo_list_collection_id])
    @todo_list = collection.todo_lists.find(params[:id])

    if @todo_list.update(todo_list_params)
      render :show
    else
      render json: @todo_list.errors.full_messages, status: 422
    end
  end

  def edit
    @todo_list = TodoList.find(params[:id])

    if @todo_list
      render json: @todo_list
    else
      render json: ["List not found"], status: 404
    end
  end

  def destroy
    @todo_list = TodoList.find(params[:id])

    if @todo_list
      @todo_list.destroy()
      render json: ["List has been deleted"], status: 200
    else
      render json: ["List not found"], status: 400
    end
  end

  private
  def todo_list_params
    params.require(:todo_list).permit(:name, :details)
  end
end
