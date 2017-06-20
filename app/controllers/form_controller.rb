class FormController < ApplicationController
  layout 'respond_to_form'

  def show
    @form_id = params[:id]
    @form = FormulaeRuby::FormClient.new(application_id: 1).find(1)
    @form = @form.to_json if @form

    @form_display = params[:display] ? params[:display] : 'headings'
  end
end
