require 'rails_helper'

RSpec.describe PlannerController, type: :controller do

  describe "GET #planner" do
    it "returns http success" do
      get :planner
      expect(response).to have_http_status(:success)
    end
  end

end
