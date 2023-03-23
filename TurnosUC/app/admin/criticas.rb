# frozen_string_literal: true

ActiveAdmin.register Critica do
  permit_params :rating, :comment, :user_id, :publication_id
end
