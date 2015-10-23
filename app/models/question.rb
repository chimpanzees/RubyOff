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

  has_many :solutions

  belongs_to(
    :author,
    class_name: "User",
    primary_key: :id,
    foreign_key: :author_id
  )

  has_many :tags

  def questions_from_tags(tags)
    # Takes in an array of tags
    Question.includes(:tags).where('tags.name IN (?)', myTags).references(:tags)
  end
end
