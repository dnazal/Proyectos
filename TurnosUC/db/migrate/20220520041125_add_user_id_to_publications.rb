# frozen_string_literal: true

class AddUserIdToPublications < ActiveRecord::Migration[6.0]
  def change
    add_column :publications, :user_id, :integer
  end
end
