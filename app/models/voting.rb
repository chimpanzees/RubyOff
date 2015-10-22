# == Schema Information
#
# Table name: votings
#
#  id          :integer          not null, primary key
#  solution_id :integer          not null
#  vote_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#



class Voting < ActiveRecord::Base
  validates :solution_id, :vote_id, presence: true
  validates :solution_id, uniqueness: true
end
