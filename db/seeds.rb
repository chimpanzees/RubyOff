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
julia = User.create!(username: "GfJules", password: "iuth43piug")

doubler = Question.create!(
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

tag1 = Tag.create!(name: "Numbers", question_id: doubler.id)
tag2 = Tag.create!(name: "Fundamentals", question_id: doubler.id)
tag3 = Tag.create!(name: "Mathematics", question_id: doubler.id)

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

Tag.create!(name: "Numbers", question_id: sum_digits.id)
Tag.create!(name: "Mathematics", question_id: sum_digits.id)

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

Tag.create!(name: "Numbers", question_id: powersOfTwo.id)
Tag.create!(name: "Mathematics", question_id: powersOfTwo.id)

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

Tag.create!(name: "Numbers", question_id: isSquare.id)
Tag.create!(name: "Mathematics", question_id: isSquare.id)

dNA = Question.create!(
  title: "DNA to RNA",
  question: "Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T'). Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA. For example: DNAtoRNA('GCAT') returns ('GCAU')",
  author_id: patrick.id,
  solution_default: 'def self.DNAtoRNA(dna)
  # code goes here.
end
',
  tests_default: 'self.DNAtoRNA("TTTT") == "UUUU"
self.DNAtoRNA("GCAT") == "GCAU"
self.DNAtoRNA("") == ""
self.DNAtoRNA("T") == "U"
self.DNAtoRNA("GACCGCCGCC") == "GACCGCCGCC"
self.DNAtoRNA("GATTCCACCGACTTCCCAAGTACCGGAAGCGCGACCAACTCGCACAGC") == "GAUUCCACCGACUUCCCAAGUACCGGAAGCGCGACCAACUCGCACAGC"
'
)

Tag.create!(name: "Strings", question_id: dNA.id)
Tag.create!(name: "Fundamentals", question_id: dNA.id)

nameShuffler = Question.create!(
  title: "Name Shuffler",
  question: "Write a function that returns a string in which the first and last names are swapped.",
  author_id: julia.id,
  solution_default: 'def self.name_shuffler(string)
  # code goes here.
end
',
  tests_default: 'self.name_shuffler("john McClane") == "McClane john"
self.name_shuffler("Mary jeggins") == "jeggins Mary"
self.name_shuffler("tom jerry") == "jerry tom"
self.name_shuffler("Mary Jane") == "Jane Mary"
self.name_shuffler("John Doe") == "Doe John"
self.name_shuffler("George Huffingquane-McGafferty") == "Huffingquane-McGafferty George"
'
)

Tag.create!(name: "Strings", question_id: nameShuffler.id)
Tag.create!(name: "Fundamentals", question_id: nameShuffler.id)

evenOdd = Question.create!(
  title: "Even or Odd?",
  question: "Create a class method that takes an integer as an argument and returns 'Even' or 'Odd'.",
  author_id: julia.id,
  solution_default: 'def self.even_or_odd(number)
  # code goes here.
end
',
  tests_default: 'self.even_or_odd(2) == "Even"
self.even_or_odd(1) == "Odd"
self.even_or_odd(0) == "Even"
self.even_or_odd(1545452) == "Even"
self.even_or_odd(7) == "Odd"
self.even_or_odd(78) == "Even"
self.even_or_odd(17) == "Odd"
self.even_or_odd(74156741) == "Odd"
self.even_or_odd(100000) == "Even"
'
)

Tag.create!(name: "Fundamentals", question_id: evenOdd.id)

solution1 = Solution.create!(
  body: 'def self.double(num)
  num * 2
end',
  author_id: nathan.id,
  question_id: doubler.id
)

Vote.create!(
  name: "Best Practices",
  solution_id: solution1.id,
  user_id: patrick.id
)

Vote.create!(
  name: "Best Practices",
  solution_id: solution1.id,
  user_id: gunit.id
)

Vote.create!(
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

Vote.create!(
  name: "Clever",
  solution_id: solution2.id,
  user_id: patrick.id
)

Vote.create!(
  name: "Clever",
  solution_id: solution2.id,
  user_id: minh.id
)

Vote.create!(
  name: "Clever",
  solution_id: solution2.id,
  user_id: gunit.id
)

Vote.create!(
  name: "Best Practices",
  solution_id: solution2.id,
  user_id: nathan.id
)

solution3 = Solution.create!(
  body: 'def self.is_square?(x)
  x < 0 ? false : Math.sqrt(x) % 1 == 0
end',
  author_id: minh.id,
  question_id: isSquare.id
)

Vote.create!(
  name: "Clever",
  solution_id: solution3.id,
  user_id: gunit.id
)

Vote.create!(
  name: "Clever",
  solution_id: solution3.id,
  user_id: minh.id
)

Vote.create!(
  name: "Clever",
  solution_id: solution3.id,
  user_id: patrick.id
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

Vote.create!(
  name: "Best Practices",
  solution_id: solution5.id,
  user_id: nicole.id
)

Vote.create!(
  name: "Best Practices",
  solution_id: solution5.id,
  user_id: nathan.id
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

Vote.create!(
  name: "Clever",
  solution_id: solution7.id,
  user_id: gunit.id
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

Vote.create!(
  name: "Best Practices",
  solution_id: solution9.id,
  user_id: gunit.id
)

Vote.create!(
  name: "Best Practices",
  solution_id: solution9.id,
  user_id: nathan.id
)

Vote.create!(
  name: "Best Practices",
  solution_id: solution9.id,
  user_id: patrick.id
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

Vote.create!(
  name: "Clever",
  solution_id: solution11.id,
  user_id: gunit.id
)

Vote.create!(
  name: "Clever",
  solution_id: solution11.id,
  user_id: nathan.id
)

Vote.create!(
  name: "Clever",
  solution_id: solution11.id,
  user_id: nicole.id
)

Vote.create!(
  name: "Clever",
  solution_id: solution11.id,
  user_id: minh.id
)

Vote.create!(
  name: "Best Practices",
  solution_id: solution11.id,
  user_id: patrick.id
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

solution13 = Solution.create!(
  body: 'def self.DNAtoRNA(dna)
  dna.gsub("T", "U")
end',
  author_id: nicole.id,
  question_id: dNA.id
)

Vote.create!(
  name: "Best Practices",
  solution_id: solution13.id,
  user_id: patrick.id
)

Vote.create!(
  name: "Best Practices",
  solution_id: solution13.id,
  user_id: nathan.id
)

Vote.create!(
  name: "Best Practices",
  solution_id: solution13.id,
  user_id: nicole.id
)

Vote.create!(
  name: "Best Practices",
  solution_id: solution13.id,
  user_id: minh.id
)

Vote.create!(
  name: "Clever",
  solution_id: solution13.id,
  user_id: gunit.id
)

solution14 = Solution.create!(
  body: 'def self.DNAtoRNA(dna)
  arr = dna.split("")
  arr.map! { |i|
    if i == "T"
        i = "U"
    else
        i
    end
  }
  arr
  dna = arr.join("")
end',
  author_id: nathan.id,
  question_id: dNA.id
)

solution15 = Solution.create!(
  body: 'def self.name_shuffler(string)
  string.split(" ").reverse.join(" ")
end',
  author_id: nathan.id,
  question_id: nameShuffler.id
)

Vote.create!(
  name: "Clever",
  solution_id: solution15.id,
  user_id: gunit.id
)

Vote.create!(
  name: "Clever",
  solution_id: solution15.id,
  user_id: julia.id
)

Vote.create!(
  name: "Best Practices",
  solution_id: solution15.id,
  user_id: patrick.id
)

solution16 = Solution.create!(
  body: 'def self.name_shuffler(string)
  array = string.split(" ")
  array[1] + " " + array[0]
end',
  author_id: patrick.id,
  question_id: nameShuffler.id
)

Vote.create!(
  name: "Best Practices",
  solution_id: solution16.id,
  user_id: julia.id
)

solution17 = Solution.create!(
  body: 'def self.even_or_odd(number)
  number.even? ? "Even" : "Odd"
end',
  author_id: patrick.id,
  question_id: evenOdd.id
)

Vote.create!(
  name: "Best Practices",
  solution_id: solution17.id,
  user_id: julia.id
)

Vote.create!(
  name: "Best Practices",
  solution_id: solution17.id,
  user_id: nathan.id
)

solution18 = Solution.create!(
  body: 'def self.even_or_odd(number)
  ["Even", "Odd"][number % 2]
end',
  author_id: minh.id,
  question_id: evenOdd.id
)

Vote.create!(
  name: "Clever",
  solution_id: solution18.id,
  user_id: nathan.id
)

Vote.create!(
  name: "Clever",
  solution_id: solution18.id,
  user_id: patrick.id
)

Vote.create!(
  name: "Clever",
  solution_id: solution18.id,
  user_id: nicole.id
)
