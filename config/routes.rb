Rails.application.routes.draw do
  mount ActionCable.server => '/cable'
  root to: 'rooms#home'
  get 'rooms/show'
  get 'rooms/home'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
