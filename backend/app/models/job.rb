class Job < ApplicationRecord
    validates :title, :description, :salary, :office, presence: {message: "%{value}é obrigatório"}
end