# frozen_string_literal: true

class CreateChats < ActiveRecord::Migration[6.0]
  def change
    create_table :chats do |t|
      t.string :texto
      t.integer :publication_id
      t.integer :user_id
      t.timestamps
    end
  end
end
