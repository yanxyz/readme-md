Push-Location $PSScriptRoot
if (-not (Test-Path 'Gemfile.lock')) {
  bundle install
}
bundle exec jekyll build --incremental
Pop-Location
