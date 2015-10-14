module SandboxesHelper
  def runInSandbox(string)
    s = Shikashi::Sandbox.new
    priv = Shikashi::Privileges.new
    priv.allow_method :*
    priv.allow_method :==
    priv.allow_method :singleton_method_added
    begin
      s.run(priv, string)
    rescue

  end
end
