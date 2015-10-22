class CreateVotings < ActiveRecord::Migration
  def change
    create_table :votings do |t|
      t.integer :solution_id, unique: true, null: false
      t.integer :vote_id, null: false

      t.timestamps null: false
    end

    add_index(:votings, :solution_id)
    add_index(:votings, :vote_id)
  end
end
