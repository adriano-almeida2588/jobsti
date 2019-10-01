class CreateJobs < ActiveRecord::Migration[5.2]
  def change
    create_table :jobs do |t|
      t.string :title
      t.text :description
      t.decimal :salary
      t.string :office
      t.string :local
      t.string :contract_type
      t.boolean :remote
      t.time :schedule

      t.timestamps
    end
  end
end
