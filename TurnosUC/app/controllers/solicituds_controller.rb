# frozen_string_literal: true

class SolicitudsController < ApplicationController
  before_action :find_publication, except: %i[delete]
  before_action :find_solicitud, only: %i[edit update delete]
  before_action :authenticate_user!, only: %i[new edit]

  def new
    @solicitud = Solicitud.new
  end

  def show; end

  def create
    @solicitud = Solicitud.new(solicitud_params)
    @solicitud.publication_id = @publication.id
    @solicitud.user_id = current_user.id
    if @solicitud.save
      redirect_to publication_path(@publication)
    else
      render 'new'
    end
  end

  def edit; end

  def update
    @solicitud = Solicitud.find(params[:id])
    if Publication.find(@solicitud.publication_id).user_id == current_user.id
      if @solicitud.update(params.permit(:estado))
        redirect_to publication_path(@publication)
      else
        render 'new'
      end
    elsif @solicitud.update(params.require(:solicitud).permit(:estado, :comentario))
      redirect_to publication_path(@publication)
    else
      render 'new'
    end
  end

  def delete
    @solicitud = Solicitud.find(params[:id])
    @solicitud.destroy
    redirect_to publication_path(@solicitud.publication_id)
  end

  private

  def solicitud_params
    params.require(:solicitud).permit(:estado, :comentario)
  end

  def find_publication
    @publication = Publication.find(params[:publication_id])
  end

  def find_solicitud
    @solicitud = Solicitud.find(params[:id])
  end
end
