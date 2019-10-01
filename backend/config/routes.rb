Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      post 'user_token' => 'user_token#create'
      post 'users/login' => 'users#login'
      resources :jobs
      resources :users
    end
  end
end
