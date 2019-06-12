Rails.application.routes.draw do
  root to: 'static_pages#root'
  # person@basecamp.com / a/A password
  namespace :api, defaults: { format: :json } do
    resources :users, only: [ :new, :create, :show, :edit, :update ]
    resource :session, only: [ :create, :destroy ]
    resources :organizations, only: [ :new, :create, :index, :show ]
    resources :user_to_organizations, only: [ :create ]
    resources :hubs,
      only: [ :create, :index, :new, :show, :update, :edit, :destroy ]

    resources :message_boards, only: [ :show ] do
      resources :message_board_posts, 
        only: [ :index, :show, :create, :new, :update, :edit, :destroy ]
    end

    resources :todo_list_collections, only: [ :show ] do
      resources :todo_lists, 
        only: [ :index, :show, :create, :new, :update, :edit, :destroy ] do
          # left off here, making api utils
          resources :todo_tasks, 
            only: [ :index, :show, :create, :new, :update, :edit, :destroy ]
        end
    end

    resources :schedules, only: [ :show ] do
      resources :events, 
        only: [ :index, :show, :create, :new, :update, :edit, :destroy ]
    end

  end
end
