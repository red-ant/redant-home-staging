Jekyll::Hooks.register :site, :post_write do |site|
  cmd = File.exists?("yarn.lock") ? "yarn" : "npm run"
  `#{cmd} build`
end
