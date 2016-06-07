class PlannerController < ApplicationController
  def planner
    @equipments=Equipment.all
  end
end
