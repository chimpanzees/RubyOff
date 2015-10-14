Rails.application.routes.draw do
  root 'static_pages#root'

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: {format: :json} do
    resources :questions, only: [:create, :destroy, :index, :show]
    resources :solutions, only: [:create, :index]
    resource :sandbox, only: [:run]
  end
end
