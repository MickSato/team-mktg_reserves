Rails.application.routes.draw do
  resources :guests
  resources :reservations
  get 'home/index'

  root to: 'home#index'
  
  get    '/welcome', to: "sessions#new",     as: :welcome
  post   '/login',   to: "sessions#create",  as: :login
  delete '/logout',  to: "sessions#destroy", as: :logout

  resources :users
  
  if Rails.env.development?
    mount LetterOpenerWeb::Engine, at: '/letter_opener'
  end
end
