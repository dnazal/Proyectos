# frozen_string_literal: true

class ArreglarUserId < ActiveRecord::Migration[6.0]
  def change
    rename_column :solicituds, :solicitor_id, :user_id
  end
end
