Rails.application.routes.draw do
  get 'admin/forms/:id/edit' => 'admin#edit'
  root 'pages#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
