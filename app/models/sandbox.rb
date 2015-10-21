# == Schema Information
#
# Table name: sandboxes
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Sandbox < ActiveRecord::Base
  ALLOWED_METHODS = [
    :+,
    :-,
    :/,
    :%,
    :*,
    :>,
    :<,
    :>=,
    :<=,
    :==,
    :**,
    :[],
    :&,
    :to_s,
    :scan,
    :length,
    :size,
    :while,
    :do,
    :times,
    :end,
    :!,
    :=~,
    :if,
    :else,
    :elsif,
    :zero?,
    :unless,
    :return,
    :each,
    :map,
    :select,
    :reject,
    :collect,
    :to_f,
    :to_i,
    :acos,
    :acosh,
    :asin,
    :asinh,
    :atan,
    :atan2,
    :atanh,
    :cbrt,
    :cos,
    :cosh,
    :erf,
    :erfc,
    :exp,
    :frexp,
    :gamma,
    :hypot,
    :ldexp,
    :lgamma,
    :log,
    :log10,
    :log2,
    :sin,
    :sinh,
    :sqrt,
    :tan,
    :tanh,
    :floor,
    :include,
    :new,
    :singleton_method_added
  ]

  def self.runTests(solutionString, testString)
    tests = self.cleanTestString(testString)
    result = tests.map do |t|
      self.runInSandbox(solutionString + "\n" + t)
    end
  end

  def self.cleanTestString(tests)
    tests.split("\n").map { |el| el.strip() }.reject { |el| el.empty? }
  end

  def self.runInSandbox(string)
    string = "include Math\n" + string # lets users use the Math module
    s = Shikashi::Sandbox.new
    priv = Shikashi::Privileges.new
    priv.allow_const_read "Math" # lets users use the Math module
    ALLOWED_METHODS.each { |method| priv.allow_method(method) }
    priv.allow_class_definitions
    priv.allow_singleton_methods

    begin
      result = s.run(priv, string)
    rescue SecurityError => e
      return {error: "SecurityError", message: e.message}
    rescue ArgumentError => e
      return {error: "ArgumentError", message: e.message}
    rescue IndexError => e
      return {error: "IndexError", message: e.message}
    rescue NameError => e
      return {error: "NameError", message: e.message}
    rescue RegexpError => e
      return {error: "RegexpError", message: e.message}
    rescue TypeError => e
      return {error: "TypeError", message: e.message}
    rescue ZeroDivisionError => e
      return {error: "ZeroDivisionError", message: e.message}
    rescue SyntaxError => e
      return {error: "SyntaxError", message: e.message}
    end

    return {success: result}
  end
end
