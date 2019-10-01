class Api::V1::UsersController < ApplicationController
	def index
			@users = User.select(:id, :email)
			render json: @users, status: :ok
	end
	def generate_token user
			begin
							Knock::AuthToken.new(payload: { sub: user.id, email: user.email}).token
			rescue => exception
							throw :exception
			end
	end

	def login
			begin
				@user = User.select(:id, :email).find_by(email: params[:user][:email])
				if @user.present?
								token = generate_token @user
								render json: {user: @user, token: token}
				else
								render json: {erro: "Usuário não encontrado"}
				end
			rescue => exception
							puts "Exception #{exception}"
			end
	end
	def create
			@user = User.new(user_params)
			if @user.save
							render json: @user, status: :created
			else
							render json: {erros: @user.errors.full_messages}, status: 400
			end
	end

private 
  def user_params
      params.require(:user).permit(:email, :password, :password_confirmation)
  end   
end
