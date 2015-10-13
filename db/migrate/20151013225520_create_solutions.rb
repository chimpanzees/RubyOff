class CreateSolutions < ActiveRecord::Migration
  def change
    create_table :solutions do |t|
      t.text :body, null: false
      t.integer :author_id, null: false
      t.integer :question_id, null: false

      t.timestamps null: false
    end

    add_index(:solutions, :author_id)
    add_index(:solutions, :question_id)
  end
end
