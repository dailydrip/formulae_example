class FormController < ApplicationController
  layout 'respond_to_form'

  def show
    @form_id = 1
    @form_display = params[:display] ? params[:display] : 'headings'
  end
end
