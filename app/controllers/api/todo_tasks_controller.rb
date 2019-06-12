class Api::TodoTasksController < ApplicationController
  def create
    @task = TodoTask.new(todo_task_params)
    @task.author_id = current_user.id
    @task.assignee_id = params[:todo_task][:assignee_id]
    @task.todo_list_id = params[:todo_list_id]

    if @task.save!
      render json: @task
    else
      render @task.errors.full_messages, status: 422
    end
  end
  
  def index
    collection = TodoListCollection.find(params[:todo_list_collection_id])
    list = collection.todo_lists.find(params[:todo_list_id])
    @tasks = list.todo_tasks

    render json: @tasks
  end

  def show
    collection = TodoListCollection.find(params[:todo_list_collection_id])
    list = collection.todo_lists.find(params[:todo_list_id])
    @task = list.todo_tasks.find(params[:id])

    if @task
      render json: @task
    else
      render json: ["Task not found"], status: 404
    end
  end

  def new
    @task = TodoTask.new

    render json: @task
  end

  def update
    collection = TodoListCollection.find(params[:todo_list_collection_id])
    list = collection.todo_lists.find(params[:todo_list_id])
    @task = list.todo_tasks.find(params[:id])

    if @task.update(todo_task_params)
      render json: @task
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def edit
    @task = TodoTask.find(params[:id])

    if @task
      render json: @task
    else
      render json: ["Task not found"], status: 404
    end
  end

  def destroy
    collection = TodoListCollection.find(params[:todo_list_collection_id])
    list = collection.todo_lists.find(params[:todo_list_id])
    @task = list.todo_tasks.find(params[:id])

    if @task
      @task.destroy()
      render json: ["Task has been deleted"], status: 200
    else
      render json: ["Task not found"], status: 400
    end
  end

  private
  def todo_task_params
    params.require(:todo_task).permit(:name, :done, :details, :due_date, :assignee_id)
  end
end
