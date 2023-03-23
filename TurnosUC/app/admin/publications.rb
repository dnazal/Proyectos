# frozen_string_literal: true

ActiveAdmin.register Publication do
  permit_params :lugar_origen, :lugar_destino, :disponibilidad, :comentarios, :user_id, :username
end
