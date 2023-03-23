# frozen_string_literal: true

class AddPublicationIdToCriticas < ActiveRecord::Migration[6.0]
  def change
    add_column :criticas, :pulication_id, :integer
  end
end
