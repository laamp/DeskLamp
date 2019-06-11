class Api::EventsController < ApplicationController
  def create
    @event = Event.new(event_params)
    @event.author_id = current_user.id
    @event.schedule_id = params[:schedule_id]

    if @event.save
      render json: @event
    else
      render @event.errors.full_messages, status: 422
    end
  end
  
  def index
    @events = Event.all

    render json: @events
  end

  def show
    @event = Event.find(params[:id])

    if @event
      render json: @event
    else
      render json: ["Event not found"], status: 404
    end
  end

  def new
    @event = Event.new

    render json: @event
  end

  def update
    @event = Event.find(params[:id])

    if @event.update(event_params)
      render json: @event
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def edit
    @event = Event.find(params[:id])

    if @event
      render json: @event
    else
      render json: ["Event not found"], status: 404
    end
  end

  def destroy
    @event = Event.find(params[:id])

    if @event
      @event.destroy()
      render json: ["Event has been deleted"], status: 200
    else
      render json: ["Event not found"], status: 400
    end
  end

  private
  def event_params
    params.require(:event)
      .permit(:notes, :start_date, :end_date)
  end
end
