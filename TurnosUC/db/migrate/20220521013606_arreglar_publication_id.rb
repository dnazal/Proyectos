# frozen_string_literal: true

class ArreglarPublicationId < ActiveRecord::Migration[6.0]
  def change
    rename_column :solicituds, :solicitado, :publication_id
  end
end
