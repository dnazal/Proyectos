# frozen_string_literal: true

class Chat < ApplicationRecord
  belongs_to :user
  has_many :mensajes
  scope :by_recently_created, -> { order(created_at: :desc) }
end
