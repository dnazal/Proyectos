# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Publication, type: :model do
  # Todo lo que está dentro de este bloque se ejecutará una vez antes de cada it
  before(:each) do
    # Creamos una instancia de la clase publicación "a mano", sin una factory
    @publication = Publication.new(lugar_origen: 'Providencia', lugar_destino: 'San Joaquin', disponibilidad: 3,
                                   comentarios: 'Salgo tarde')
  end

  it 'is not valid with no lugar de origen' do
    @publication.lugar_origen = nil
    expect(@publication).not_to be_valid
  end

  it 'is not valid with a title too short' do
    @publication.lugar_origen = 'aaa'
    expect(@publication).not_to be_valid
  end

  it 'is not valid with a title too short' do
    @publication.lugar_destino = 'aaa'
    expect(@publication).not_to be_valid
  end

  it 'is not valid with no content' do
    @publication.lugar_destino = nil
    expect(@publication).not_to be_valid
  end

  it 'is not valid with a content too short' do
    @publication.disponibilidad = 'aa'
    expect(@publication).not_to be_valid
  end

  it 'is not valid with no content' do
    @publication.disponibilidad = nil
    expect(@publication).not_to be_valid
  end

  it 'is  valid when lugar origen es igual a lugar origen' do
    assert_same(@publication.lugar_origen, @publication.lugar_origen)
  end

  it 'is valid when lugar destino es igual a lugar destino' do
    assert_same(@publication.lugar_destino, @publication.lugar_destino)
  end

  it 'is valid when disponibilidad es igual a disponibilidad' do
    assert_same(@publication.disponibilidad, @publication.disponibilidad)
  end

  it 'is valid when lugar destino es igual a lugar destino' do
    assert_same(@publication.lugar_destino, @publication.lugar_destino)
  end

  it 'is not valid with a content too short' do
    @publication.disponibilidad = 'aa'
    expect(@publication).not_to be_valid
  end

  it 'is not valid with a negative value' do
    @publication.disponibilidad = -1
    expect(@publication).not_to be_valid
  end

  it 'is not valid with no disponibilidad' do
    @publication.disponibilidad = nil
    expect(@publication).not_to be_valid
  end

  it 'returns a number' do
    expect(@publication.disponibilidad).to eq(3)
  end
end
