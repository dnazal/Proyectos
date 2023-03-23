# frozen_string_literal: true

class PublicationsController < ApplicationController
  before_action :find_publication, only: %i[show edit update delete]
  before_action :authenticate_user!, only: %i[new edit]

  def index
    if params[:category].blank?
      @publications = Publication.all
    else
      @category_id = Category.find_by(name: params[:category]).id
      @publications = Publication.where(category_id: @category_id)
    end
  end

  def show
    @average_critica = if @publication.criticas.blank?
                         0
                       else
                         @publication.criticas.average(:rating).round(2)
                       end
  end

  def new
    @publication = current_user.publications.build
    @categories = Category.all.map { |c| [c.name, c.id] }
  end

  def create
    @publication = current_user.publications.build(publication_params)
    @publication.username = current_user.email
    @publication.user_id = current_user.id
    @publication.disponibilidad = @publication.disponibilidad.to_i
    @publication.category_id = params[:category_id]
    @publication.category_id = rand(1..2) if @publication.category_id.blank?
    if @publication.save!
      redirect_to publications_path
    else
      render :new
    end
  end

  def edit
    @categories = Category.all.map { |c| [c.name, c.id] }
  end

  def update
    @publication = Publication.find(params[:id])
    @publication.category_id = 1
    @publication.category_id = rand(1..2) if @publication.category_id.blank?
    if @publication.update(publication_params)
      redirect_to publications_path
    else
      render :edit
    end
  end

  def delete
    @publication = Publication.find(params[:id])
    @publication.destroy
    redirect_to root_path
  end

  private

  def publication_params
    params.require(:publication).permit(:lugar_origen, :lugar_destino, :disponibilidad, :comentarios, :category_id)
  end

  def find_publication
    @publication = Publication.find(params[:id])
  end
end
