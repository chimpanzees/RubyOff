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

class Question < ActiveRecord::Base
  validates :title, :question, :author_id, :tests_default, presence: true

  belongs_to :author, through: :users
end
