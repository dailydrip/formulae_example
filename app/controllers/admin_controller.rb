class AdminController < ApplicationController
  layout 'admin'

  def edit
    @form_id = params[:id]
  end
end
