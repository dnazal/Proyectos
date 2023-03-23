# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  devise_for :users, controllers: { sessions: 'users/sessions', registrations: 'users/registrations' },
                     path: '', path_names: { sign_in: 'login', sign_out: 'logout', sign_up: 'register' }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :publications do
    resources :criticas
  end

  resources :publications do
    resources :solicituds
  end

  resources :users do
    resources :mensajes
  end

  resources :users do
    resources :chats
  end

  root 'publications#index'
  get '/publications/new', to: 'publications#new'
  delete '/sign_out', to: 'sessions#delete'
  get 'users/delete/:id', to: 'users#delete', as: 'delete_user'
  get '/publication_delete/:id', to: 'publications#delete'
  get '/solicitud_delete/:id', to: 'solicituds#delete'
  get '/critica_delete/:id', to: 'criticas#destroy', as: 'delete_critica'
  get '/chat_delete/:id', to: 'chats#delete', as: 'delete_chat'
  devise_scope :user do
    get '/logout', to: 'users/sessions#destroy'
  end
end
