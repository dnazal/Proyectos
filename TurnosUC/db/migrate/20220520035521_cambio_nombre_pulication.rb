# frozen_string_literal: true

class CambioNombrePulication < ActiveRecord::Migration[6.0]
  def change
    rename_column :criticas, :pulication_id, :publication_id
  end
end
