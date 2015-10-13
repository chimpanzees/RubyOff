Rails.application.routes.draw do
  root 'sandboxes#show'
  
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
  resource :sandboxes, only: [:show]
end
