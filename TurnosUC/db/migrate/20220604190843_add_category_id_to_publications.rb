# frozen_string_literal: true

class AddCategoryIdToPublications < ActiveRecord::Migration[6.0]
  def change
    add_column :publications, :category_id, :integer
  end
end
