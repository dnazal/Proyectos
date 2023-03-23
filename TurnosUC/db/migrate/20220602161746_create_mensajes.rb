# frozen_string_literal: true

class CreateMensajes < ActiveRecord::Migration[6.0]
  def change
    create_table :mensajes do |t|
      t.integer :user_id
      t.integer :receptor_id
      t.string :texto

      t.timestamps
    end
  end
end
