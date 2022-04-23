Jekyll::Hooks.register :site, :post_write do |site|
  next if site.config["serving"]
  cmd = File.exists?("yarn.lock") ? "yarn" : "npm run"
  exec("#{cmd} build")
end
