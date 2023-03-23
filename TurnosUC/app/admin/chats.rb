# frozen_string_literal: true

ActiveAdmin.register Chat do
  permit_params :texto, :publication_id, :user_id
end
