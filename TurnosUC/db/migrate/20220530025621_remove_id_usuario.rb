# frozen_string_literal: true

class RemoveIdUsuario < ActiveRecord::Migration[6.0]
  def up
    remove_column :publications, :id_usuario
  end
end
