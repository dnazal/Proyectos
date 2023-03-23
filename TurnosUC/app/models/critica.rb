# frozen_string_literal: true

class Critica < ApplicationRecord
  belongs_to :user
  belongs_to :publication
end
