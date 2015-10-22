# == Schema Information
#
# Table name: votes
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  solution_id :integer          not null
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#



class Vote < ActiveRecord::Base
  validates :name, :solution_id, presence: true
  validates :user_id, uniqueness: {scope: :solution_id}

  belongs_to :solution
  belongs_to :user

  def best_practices_count(id)
    self.where(solution_id: id, name: "Best Practices").count
  end

  def clever_count(id)
    self.where(solution_id: id, name: "Clever").count
  end
end
