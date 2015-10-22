Rails.application.routes.draw do
  resources :votes
  root 'static_pages#root'

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: {format: :json} do
    resources :questions, only: [:create, :destroy, :index, :show]
    resources :solutions, only: [:create, :index]
    resource :sandbox, only: [:create]
    resources :votes, only: [:create, :index, :destroy]
  end
end
