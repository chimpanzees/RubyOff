class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.string :name, null: false
      t.integer :solution_id, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end

    add_index(:votes, [:solution_id, :user_id], unique: true)
  end
end
