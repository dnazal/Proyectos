# frozen_string_literal: true

class ApplicationController < ActionController::Base
    before_action :configure_permitted_parameters, if: :devise_controller?
    protected
       def configure_permitted_parameters
          devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:email, :password, :phone, :age, :username, :avatar)}
          devise_parameter_sanitizer.permit(:account_update) { |u| u.permit(:avatar, :phone, :age, :username, :email, :password, :current_password)}
       end
 end
