class Api::MessageBoardPostsController < ApplicationController
  def create
    @post = MessageBoardPost.new(message_board_post_params)
    @post.author_id = current_user.id
    @post.message_board_id = params[:message_board_id]

    if @post.save
      render :show
    else
      render @post.errors.full_messages, status: 422
    end
  end

  def index
    board = MessageBoard.find(params[:message_board_id])
    @posts = board.message_board_posts

    render :index
  end

  def show
    board = MessageBoard.find(params[:message_board_id])
    @post = board.message_board_posts.find(params[:id])

    if @post
      render :show
    else
      render json: ["Post not found"], status: 404
    end
  end

  def new
    @post = MessageBoardPost.new

    render json: @post
  end

  def update
    board = MessageBoard.find(params[:message_board_id])
    @post = board.message_board_posts.find(params[:id])

    if @post.update(message_board_post_params)
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def edit
    board = MessageBoard.find(params[:message_board_id])
    @post = board.message_board_posts.find(params[:id])

    if @post
      render json: @post
    else
      render json: ["Post not found"], status: 404
    end
  end

  def destroy
    @post = MessageBoardPost.find(params[:id])

    if @post
      @post.destroy()
      render json: ["Post has been deleted"], status: 200
    else
      render json: ["Post not found"], status: 400
    end
  end

  private
  def message_board_post_params
    params.require(:message_board_post).permit(:category, :title, :body)
  end
end
