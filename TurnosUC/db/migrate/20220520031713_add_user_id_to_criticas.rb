# frozen_string_literal: true

class AddUserIdToCriticas < ActiveRecord::Migration[6.0]
  def change
    add_column :criticas, :user_id, :integer
  end
end
