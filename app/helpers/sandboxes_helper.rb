module SandboxesHelper
  ALLOWED_METHODS = [:+, :-, :/, :*, :==, :[], :singleton_method_added]

  def runInSandbox(string)
    s = Shikashi::Sandbox.new
    priv = Shikashi::Privileges.new
    ALLOWED_METHODS.each { |method| priv.allow_method(method) }

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
    end

    return {success: result}
  end
end
