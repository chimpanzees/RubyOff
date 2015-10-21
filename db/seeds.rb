# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
minh = User.create!(username: "MinhG-Man", password: "MinhDankWin")
nathan = User.create!(username: "Nathan442", password: "HazeValley")
nicole = User.create!(username: "LawyerNico", password: "j7df77af8s")
patrick = User.create!(username: "HackerPat", password: "7asd9fsad987fadiu")
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
powersOfTwo = Question.create!(
  title: "Powers of Two",
  question: "Write a class method that determines if given number is a power of two. A power of two means a number of the form 2^n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent. I.e. 1024 is a power of two: it 2^10.",
  author_id: nicole.id,
  solution_default: 'def self.power_of_two?(x)
  # code
end',
  tests_default: 'self.power_of_two?(2) == true
self.power_of_two?(4096) == true
self.power_of_two?(5) == false
'
)
isSquare = Question.create!(
  title: "You're a Square!",
  question: "Given an integral number, determine if it's a square number. In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.",
  author_id: patrick.id,
  solution_default: 'def self.is_square?(x)
  false
end',
  tests_default: 'self.is_square?(2) == false
self.is_square?(1) == true
self.is_square?(6) == false
self.is_square?(25) == true
self.is_square?(-1) == false'
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
solution3 = Solution.create!(
  body: 'def self.is_square?(x)
  x < 0 ? false : Math.sqrt(x) % 1 == 0
end',
  author_id: minh.id,
  question_id: isSquare.id
)
solution4 = Solution.create!(
  body: 'def self.is_square?(x)
  x >= 0 && Math.sqrt(x).floor ** 2 == x
end',
  author_id: nicole.id,
  question_id: isSquare.id
)
solution5 = Solution.create!(
  body: 'def self.is_square?(x)
  return false if x < 0
  sqr = x**0.5
  sqr == sqr.to_i
end',
  author_id: nathan.id,
  question_id: isSquare.id
)
solution6 = Solution.create!(
  body: 'def self.is_square?(x)
  (0..x).each do |i|
    if i ** 2 == x then
      return true
    elsif i ** 2 > x
      return false
    end
  end
  false
end',
  author_id: patrick.id,
  question_id: isSquare.id
)
solution7 = Solution.create!(
  body: 'def self.power_of_two?(x)
  Math.log2(x) % 1 == 0
end',
  author_id: patrick.id,
  question_id: powersOfTwo.id
)
solution8 = Solution.create!(
  body: 'def self.power_of_two?(x)
  x.to_s(2).scan(/1/).length == 1
end',
  author_id: minh.id,
  question_id: powersOfTwo.id
)
solution9 = Solution.create!(
  body: 'def self.power_of_two?(x)
  while x%2==0 do
    x=x/2
  end
  x==1
end',
  author_id: nathan.id,
  question_id: powersOfTwo.id
)
solution10 = Solution.create!(
  body: 'def self.power_of_two?(x)
  x == 1 || (x % 2).zero? && power_of_two?(x / 2)
end',
  author_id: nicole.id,
  question_id: powersOfTwo.id
)
