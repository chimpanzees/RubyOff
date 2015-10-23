# == Schema Information
#
# Table name: tags
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  question_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Tag < ActiveRecord::Base
  validates :name, :question_id, presence: true
  validates :name, uniqueness: {scope: :question_id}

  belongs_to :question

  # def self.tags_for_question(id)
  #   self.where(question_id: id)
  # end

  def self.unique_tags
    self.uniq.pluck(:name)
  end
end
