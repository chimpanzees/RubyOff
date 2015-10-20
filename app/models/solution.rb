# == Schema Information
#
# Table name: solutions
#
#  id          :integer          not null, primary key
#  body        :text             not null
#  author_id   :integer          not null
#  question_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Solution < ActiveRecord::Base
  validates :author_id, :question_id, :body, presence: true

  belongs_to :question

  belongs_to(
    :author,
    class_name: "User",
    primary_key: :id,
    foreign_key: :author_id
  )

  def self.all_for_question(id)
    self.where(question_id: id)
        .collect do |sol|
          {
            "solution": sol,
            "username": sol.author.username,
            "question_title": sol.question.title
          }
        end
  end
end
