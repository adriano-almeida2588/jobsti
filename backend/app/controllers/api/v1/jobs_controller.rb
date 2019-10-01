class Api::V1::JobsController < ApplicationController
    before_action :authenticate_user, except: :user
    def index
        @jobs = Job.all
        render json: @jobs, status: 200
    end
    def user
      render json: {user: current_user}
    end
    def create
        @job = Job.new(jobs_params)
        if @job.save
          render json: @job, status: :created
        else
          render json: {:erros => @job.errors.full_messages}
        end
    end
    
    private
        def jobs_params
            params.require(:job).permit(:id, :title, :description, :salary, :office, :local, :contract_type, :remote, :schedule)
        end 
end