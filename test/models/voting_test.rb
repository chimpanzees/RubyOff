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

require 'test_helper'

class VotingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
