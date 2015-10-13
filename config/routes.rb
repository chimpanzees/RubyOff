Rails.application.routes.draw do
  root 'sandboxes#show'

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
  resource :sandboxes, only: [:show]

  namespace :api, defaults: {format: :json} do
    resources :questions, only: [:create, :destroy, :index, :show]
    resources :solutions, only: [:create, :index]
  end
end
