Rails.application.routes.draw do
  get 'forms/:id(/:display)' => 'form#show'
  get 'admin/forms/:id/edit' => 'admin#edit'
  get 'source_code' => 'pages#source_code'
  root 'pages#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
