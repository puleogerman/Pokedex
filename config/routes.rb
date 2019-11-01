Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # root 'pokemons#index'
  resources :pokemons, only: [:index,:show], shallow: true do
    resources :battle, only: [:index]
  end
end
