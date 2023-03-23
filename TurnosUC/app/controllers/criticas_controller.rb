# frozen_string_literal: true

class CriticasController < ApplicationController
  before_action :find_publication, except: %i[destroy]
  before_action :find_critica, only: %i[edit update destroy]
  before_action :authenticate_user!, only: %i[new edit]

  def new
    @critica = Critica.new
  end

  def show
    redirect_to root_path
  end

  def create
    @critica = Critica.new(critica_params)
    @critica.publication_id = @publication.id
    @critica.user_id = current_user.id
    if @critica.save
      redirect_to publication_path(@publication)
    else
      render 'new'
    end
  end

  def edit; end

  def update
    @critica = Critica.find(params[:id])
    if @critica.update(critica_params)
      redirect_to publication_path(@publication)
    else
      render 'new'
    end
  end

  def destroy
    @critica = Critica.find(params[:id])
    @critica.destroy
    redirect_to publication_path(@critica.publication_id)
  end

  private

  def critica_params
    params.require(:critica).permit(:rating, :comment)
  end

  def find_publication
    @publication = Publication.find(params[:publication_id])
  end

  def find_critica
    @critica = Critica.find(params[:id])
  end
end
