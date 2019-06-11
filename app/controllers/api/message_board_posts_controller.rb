class Api::MessageBoardPostsController < ApplicationController
  def create
    @post = MessageBoardPost.new(message_board_post_params)
    @post.author_id = current_user.id
    @post.message_board_id = params[:message_board_id]

    if @post.save
      render json: @post
    else
      render @post.errors.full_messages, status: 422
    end
  end

  def index
    @posts = MessageBoardPost.all

    render json: @posts
  end

  def show
    @post = MessageBoardPost.find(params[:id])

    if @post
      render json: @post
    else
      render json: ["Post not found"], status: 404
    end
  end

  def new
    @post = MessageBoardPost.new

    render json: @post
  end

  def update
    @post = MessageBoardPost.find(params[:id])

    if @post.update(message_board_post_params)
      render json: @post
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def edit
    # @post = MessageBoardPost
  end

  def destroy

  end

  private
  def message_board_post_params
    params.require(:message_board_post).permit(:category, :title, :body)
  end
end
