activate :directory_indexes
activate :autoprefixer

activate :contentful do |f|
  f.access_token = '5081448719531193a0142ce589b1e6a31dd0b3e5de8b758e0ac4a9aca82c566a'
  f.space = { space: 'pbuxw9ebesfu' }
  f.content_types = {
    characters: 'character',
    tags: 'tag'
  }
end

set :relative_links, true
set :css_dir, "assets/stylesheets"
set :js_dir, "assets/javascripts"
set :images_dir, "assets/images"
set :fonts_dir, "assets/fonts"
set :layout, "layouts/application"

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false
page "/feed.xml", layout: false

configure :development do
  activate :livereload
end

configure :build do
  activate :relative_assets
end

data.space.tags.each do |id, tag|
  proxy "tags/#{tag.character}.html", "tag.html", locals: { tag: tag }
end
