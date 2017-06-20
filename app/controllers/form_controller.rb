class FormController < ApplicationController
  layout 'respond_to_form'

  def show
    @form_id = params[:id]
    @form_display = params[:display] ? params[:display] : 'HEADINGS'
  end
end
