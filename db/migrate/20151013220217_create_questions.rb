class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.string :title, null: false
      t.text :question, null: false
      t.integer :author_id, null: false
      t.text :solution_default
      t.text :tests_default, null: false

      t.timestamps null: false
    end

    add_index(:questions, :author_id)
    add_index(:users, :username)
    add_index(:users, :session_token)
  end
end
