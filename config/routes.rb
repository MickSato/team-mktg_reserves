Rails.application.routes.draw do
  resources :guests
  resources :reservations
  get 'home/index'
  get '/events', to: "home#events", as: :events
  get 'thanks', to: "guests#thanks", as: :thanks

  root to: 'home#index'
  
  get    '/welcome', to: "sessions#new",     as: :welcome
  post   '/login',   to: "sessions#create",  as: :login
  delete '/logout',  to: "sessions#destroy", as: :logout

  resources :users
  
  if Rails.env.development?
    mount LetterOpenerWeb::Engine, at: '/letter_opener'
  end
end
