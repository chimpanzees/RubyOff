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

  def self.questions_from_tags(tags)
    # Takes in an array of tags
    if tags.length == 0
      # if no tags are selected, return all of the questions
      return self.all
    end
    self.includes(:tags).where('tags.name IN (?)', tags).references(:tags)
  end
end
