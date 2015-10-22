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
gunit = User.create!(username: "GGG-Unit!!!", password: "7asd9sfadiu")

question1 = Question.create!(
  title: "Doubler",
  question: "Write a class method that doubles an input number.",
  author_id: minh.id,
  solution_default: 'def self.double(num)
  # code goes here...
end
',
  tests_default: 'self.double(2) == 4
self.double(1) == 2
self.double(6) == 12
'
)

sum_digits = Question.create!(
  title: "Sum the digits",
  question: "Given a string consisting of numbers, letters and symbols, write a function that will sum up the numbers.
Note: consecutive integers should be treated as a single number. All numbers should be treated as positive integers as well.
11-14 should be treated as 11 and 14.
3.14 should be treated as 3 and 14.",
  author_id: nathan.id,
  solution_default: 'def self.sum_from_string(str)
  # code goes here...
end
',
  tests_default: 'self.sum_from_string("In 2020, how much will an iPhone 18 cost?") == 2038
self.sum_from_string("1+1=2") == 4
self.sum_from_string("e=mc^2") == 2
self.sum_from_string("aHR0cDovL3d3dy5jb2Rld2Fyy5jb20va2F0S9uF2wdA==") == 53
self.sum_from_string("a30561ff4fb19170aa598b1431b52edad1fcc3e0") == 51820
self.sum_from_string("x1KT   CmZ__\rYouOY8Uqu-ETtz") == 9
self.sum_from_string("x1KT-8&*@\"CmZ__\rYouO  __Y8Uq\\u-ETtz") == 17
self.sum_from_string("") == 0
self.sum_from_string("Hello World") == 0
'
)

powersOfTwo = Question.create!(
  title: "Powers of Two",
  question: "Write a class method that determines if given number is a power of two. A power of two means a number of the form 2^n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent. I.e. 1024 is a power of two: it 2^10.",
  author_id: nicole.id,
  solution_default: 'def self.power_of_two?(x)
  # code goes here
end
',
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
end
',
  tests_default: 'self.is_square?(2) == false
self.is_square?(1) == true
self.is_square?(6) == false
self.is_square?(25) == true
self.is_square?(-1) == false
'
)

solution1 = Solution.create!(
  body: 'def self.double(num)
  num * 2
end',
  author_id: nathan.id,
  question_id: question1.id
)

vote1 = Vote.create!(
  name: "Best Practices",
  solution_id: solution1.id,
  user_id: patrick.id
)

vote2 = Vote.create!(
  name: "Best Practices",
  solution_id: solution1.id,
  user_id: gunit.id
)

vote3 = Vote.create!(
  name: "Clever",
  solution_id: solution1.id,
  user_id: minh.id
)

solution2 = Solution.create!(
  body: 'def self.triple(num)
  str.scan(/\d+/).map(&:to_i).reduce(0, :+)
end',
  author_id: gunit.id,
  question_id: sum_digits.id
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

solution11 = Solution.create!(
  body: 'def self.sum_from_string(str)
  str.scan(/\d+/).map(&:to_i).inject(:+) || 0
end',
  author_id: patrick.id,
  question_id: sum_digits.id
)

solution12 = Solution.create!(
  body: 'def self.sum_from_string(str)
  array = str.split("")
  digits=["0","1","2","3","4","5","6","7","8","9"]
  array.each do |x|
    x.replace("_") if !(digits.include? x)
  end
  new_string = array.join
  newer_string = (new_string.split("_"))

  if newer_string.select{|x| x == "_"} == []
    newer_string.delete_if{|x| x == "_"}
  else
  end

  if newer_string == []
    return 0
  else
  end

  newer_string.map!{|x| x.to_i}
  return newer_string.inject{|sum,n| sum + n}
end',
  author_id: nathan.id,
  question_id: sum_digits.id
)
