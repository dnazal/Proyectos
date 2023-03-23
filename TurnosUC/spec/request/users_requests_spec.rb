# frozen_string_literal: true
### require '../profile_helper.rb'
# #require 'rails_helper'
##
### Se agrupan todos los tests relacionados al controlador de Profiles,
### con esta línea se le dice a Rails que será testeado
# #RSpec.describe 'Users', type: :request do
##  # Se crean unos atributos para la creación de un Profile
##  # para ver si es que funciona bien algunas características en donde se necesita que el usuario sea guardado
##  before(:each) do
##    @attr_user = {
##      email: 'test@test.com',
##      username: 'Example_name',
##      phone: 1234567,
##      age: 20
##    }
##
##    @invalid_attr_user = {
##        email: 'test@test.com',
##      username: 'Example_name',
##      phone: 1234567,
##      age: "Hola"
##    }
##    @attr_user2 = {
##        email: 'test@test.com',
##        username: 'Example_name',
##        phone: 1234566,
##        age: 28
##    }
##  end
##  # Se describe lo que se testea
##  describe 'get index' do
##    # Comportamiento esperado
##    it 'should return a successful request' do
##      # Se le señala a Rails que se haga un GET a la ruta /profiles
##      get '/users'
##      # Lo esperado es que la respuesta tenga un status ok o 200 que representa que todo ha salido bien
##      expect(response).to have_http_status(:ok)
##    end
# #end
