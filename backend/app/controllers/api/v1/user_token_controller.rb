class Api::V1::UserTokenController < Knock::AuthTokenController
    skip_before_action :verify_authenticity_token, raise: false
    def user_params
        params.require(:user).permit(:email, :password, :password_confirmation)
    end
    
end
