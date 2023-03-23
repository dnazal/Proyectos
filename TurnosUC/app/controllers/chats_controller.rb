# frozen_string_literal: true

class ChatsController < ApplicationController
  before_action :find_user, except: %i[delete]

  def index
    @chats = Chat.all
  end

  def show; end

  def new
    @chat = current_user.chats.build
  end

  def create
    @chat = Chat.new(chat_params)
    @chat.publication_id = @user.id
    @chat.user_id = current_user.id
    if @chat.save
      redirect_to new_user_chat_path(@user.id)
    else
      render :new
    end
  end
  
  def edit
  end

  def update
    @chat = Chat.find(params[:id])
    if @chat.update(chat_params)
      redirect_to new_user_chat_path(@chat.user_id)
    else
      render 'new'
    end
  end

  def delete
    @chat = Chat.find(params[:id])
    @chat.destroy
    redirect_to new_user_chat_path(@chat.user_id)
  end

  private

  def chat_params
    params.require(:chat).permit(:texto)
  end

  def find_user
    @user = User.find(params[:user_id])
  end
end
