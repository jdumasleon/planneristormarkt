require 'test_helper'

class StaticPagesControllerTest < ActionController::TestCase

  def setup
      @base_title = "PlannerRistorMarkt"
  end


  test "should get home" do
    get :home
    assert_response :success
     assert_select "title", "Home | #{@base_title}"
  end

  test "should get help" do
    get :help
    assert_response :success
     assert_select "title", "Help | #{@base_title}"
  end

  test "should get about" do
    get :about
    assert_response :success
     assert_select "title", "About | #{@base_title}"
  end

  test "should get planner" do
   get :planner
   assert_response :success
   assert_select "title", "Planner | #{@base_title}"
  end

end
