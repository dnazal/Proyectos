# frozen_string_literal: true

class CreateCriticas < ActiveRecord::Migration[6.0]
  def change
    create_table :criticas do |t|
      t.integer :rating
      t.text :comment

      t.timestamps
    end
  end
end
