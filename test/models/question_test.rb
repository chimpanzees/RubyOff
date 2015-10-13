# == Schema Information
#
# Table name: questions
#
#  id               :integer          not null, primary key
#  title            :string           not null
#  question         :text             not null
#  author_id        :integer          not null
#  solution_default :text
#  tests_default    :text             not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

require 'test_helper'

class QuestionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
