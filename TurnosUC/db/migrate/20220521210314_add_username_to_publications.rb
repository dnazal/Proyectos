# frozen_string_literal: true

class AddUsernameToPublications < ActiveRecord::Migration[6.0]
  def change
    add_column :publications, :username, :string
  end
end
