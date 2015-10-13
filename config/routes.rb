Rails.application.routes.draw do
  resources :solutions
  root 'sandboxes#show'

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
  resource :sandboxes, only: [:show]

  namespace :api, defaults: {format: :json} do
    resources :questions, only: [:create, :destroy, :index, :show]
  end
end
