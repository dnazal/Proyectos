# frozen_string_literal: true

class Publication < ApplicationRecord
  belongs_to :user
  belongs_to :category
  has_many :criticas, dependent: :destroy
  has_many :solicituds, dependent: :destroy
  validates :lugar_origen, length: { minimum: 1 }
  validates :lugar_destino, length: { minimum: 1 }
  validates :disponibilidad, numericality: { greater_than_or_equal_to: 0 }
end
