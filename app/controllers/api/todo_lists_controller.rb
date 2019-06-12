class Api::TodoListsController < ApplicationController
  def create
    @list = TodoList.new(todo_list_params)
    @list.todo_collection_id = params[:todo_list_collection_id]

    if @list.save
      render json: @list
    else
      render @list.errors.full_messages, status: 422
    end
  end
  
  def index
    collection = TodoListCollection.find(params[:todo_list_collection_id])
    @lists = collection.todo_lists

    render json: @lists
  end

  def show
    collection = TodoListCollection.find(params[:todo_list_collection_id])
    @list = collection.todo_lists.find(params[:id])

    if @list
      render json: @list
    else
      render json: ["List not found"], status: 404
    end
  end

  def new
    @list = TodoList.new

    render json: @list
  end

  def update
    @list = TodoList.find(params[:id])

    if @list.update(todo_list_params)
      render json: @list
    else
      render json: @list.errors.full_messages, status: 422
    end
  end

  def edit
    @list = TodoList.find(params[:id])

    if @list
      render json: @list
    else
      render json: ["List not found"], status: 404
    end
  end

  def destroy
    @list = TodoList.find(params[:id])

    if @list
      @list.destroy()
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
