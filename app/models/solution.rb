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

  has_many :votes

  def self.all_for_question(id, sort_by)
    if sort_by == "Clever"
      self.where(question_id: id)
          .collect do |sol|
            {
              "solution" => sol,
              "username" => sol.author.username,
              "question_title" => sol.question.title,
              "clever_count" => Solution.where(id: sol.id)
                                        .collect { |sol| sol.votes}[0]
                                        .where(name: "Clever")
                                        .count,
              "best_practices_count" => Solution.where(id: sol.id)
                                                .collect { |sol| sol.votes}[0]
                                                .where(name: "Best Practices")
                                                .count
            }
          end
          .sort! { |h1, h2| h2["clever_count"] <=> h1["clever_count"] }
    else
      self.where(question_id: id)
          .collect do |sol|
            {
              "solution" => sol,
              "username" => sol.author.username,
              "question_title" => sol.question.title,
              "clever_count" => Solution.where(id: sol.id)
                                        .collect { |sol| sol.votes}[0]
                                        .where(name: "Clever")
                                        .count,
              "best_practices_count" => Solution.where(id: sol.id)
                                                .collect { |sol| sol.votes}[0]
                                                .where(name: "Best Practices")
                                                .count
            }
          end
          .sort! { |h1, h2| h2["best_practices_count"] <=> h1["best_practices_count"] }
    end
  end
end
