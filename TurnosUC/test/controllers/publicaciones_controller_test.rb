# frozen_string_literal: true

require 'test_helper'

class PublicacionesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @publication = publications(:one)
  end

  test 'should get index' do
    get publications_path
    assert_response :success
  end

  test 'should get new' do
    get new_publication_url
    assert_response :success
  end

  test "get index is successful if user is authenticated" do
    sign_in users(:pedro)
    get publications_path
    assert_response :success
  end
end


