# frozen_string_literal: true

class CreatePublications < ActiveRecord::Migration[6.0]
  def change
    create_table :publications do |t|
      t.integer :id_usuario
      t.string :lugar_origen
      t.string :lugar_destino
      t.integer :disponibilidad
      t.text :comentarios

      t.timestamps
    end
  end
end
