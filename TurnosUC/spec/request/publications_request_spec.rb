# frozen_string_literal: true

require 'rails_helper'
require 'faker'

RSpec.describe Publication, type: :request do
  #   # Aquí se utiliza la factory de Publication para la creación de una publicación
  #   let!(:publicacion) { create(:publicacion) }
  #   let!(:attr_publicacion) { { titulo: Faker::Lorem.words(number: rand(10..20)), descripcion: Faker::Lorem.paragraph, autor: Faker::Lorem.words(number: rand(10..20)) } }
  #   let!(:invalid_attr_publicacion) { { titulo: Faker::Lorem.words(number: rand(10..20)), descripcion: Faker::Lorem.paragraph, autor: Faker::Lorem.words(number: rand(10..20)) } }
  #   # Se describe lo que se testea
  #   describe 'get index' do
  #     # Comportamiento esperado
  #     it 'should return a successful request' do
  #       # Se le señala a Rails que se haga un GET a la ruta /publications
  #       get '/publicacions/new'
  #       # Lo esperado es que la respuesta tenga un status ok o 200 que representa que todo ha salido bien
  #       expect(response).to have_http_status(:ok)
  #     end
  #   end

  describe 'get index' do
    it 'should return a successful request' do
      get '/publications'
      expect(response).to have_http_status(:ok)
    end
  end

  describe 'get new' do
    it 'should return a successful request' do
      get '/publications/new'
      expect(response).to have_http_status(:ok)
    end
  end

  describe 'get show' do
    it 'should return a successful request' do
      get '/publications/#1'
      expect(response).to have_http_status(:ok)
    end
  end
end
