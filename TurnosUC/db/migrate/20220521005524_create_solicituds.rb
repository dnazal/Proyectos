# frozen_string_literal: true

class CreateSolicituds < ActiveRecord::Migration[6.0]
  def change
    create_table :solicituds do |t|
      t.text :comentario
      t.string :estado
      t.integer :solicitor_id
      t.integer :solicitado

      t.timestamps
    end
  end
end
