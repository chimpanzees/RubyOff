# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
minh = User.create!(username: "Minh", password: "MinhDankWin")
nathan = User.create!(username: "Nathan", password: "HazeValley")
question1 = Question.create!(
  title: "Doubler",
  question: "Write a class method that doubles an input number.",
  author_id: minh.id,
  solution_default: 'def self.double(num)
  # code goes here...
end',
  tests_default: 'self.double(2) == 4
self.double(1) == 2
self.double(6) == 12'
)
question2 = Question.create!(
  title: "Tripler",
  question: "Write a class method that triples an input number.",
  author_id: nathan.id,
  solution_default: 'def self.triple(num)
  # code goes here...
end',
  tests_default: 'self.triple(2) == 6
self.triple(1) == 3
self.triple(6) == 18'
)
solution1 = Solution.create!(
  body: 'def self.double(num)
  num * 2
end',
  author_id: nathan.id,
  question_id: question1.id
)
solution2 = Solution.create!(
  body: 'def self.triple(num)
  num * 3
end',
  author_id: minh.id,
  question_id: question2.id
)
