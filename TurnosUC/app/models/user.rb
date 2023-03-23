# frozen_string_literal: true

class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable ejkwfn
  has_many :criticas, dependent: :destroy
  has_many :publications, dependent: :destroy
  has_many :chats, dependent: :destroy
  has_one_attached :avatar
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  validates :age, numericality: { greater_than_or_equal_to: 0 }
end
