# frozen_string_literal: true

ActiveAdmin.register User do
  permit_params :email, :username, :phone, :age

  form do |f|
    f.inputs 'User' do
      f.input :email
      f.input :phone
      f.input :username
      f.input :age
    end
    f.actions
  end
end
