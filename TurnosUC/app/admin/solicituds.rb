# frozen_string_literal: true

ActiveAdmin.register Solicitud do
  permit_params :comentario, :estado, :user_id, :publication_id
end
