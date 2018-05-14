activate :directory_indexes
activate :autoprefixer
activate :blog do |blog|
  # This will add a prefix to all links, template references and source paths
  # blog.prefix = "blog"
  # blog.permalink = "{year}/{month}/{day}/{title}.html"
  # Matcher for blog source files
  blog.sources = "posts/{year}-{month}-{day}-{title}.html"
  # blog.taglink = "tags/{tag}.html"
  blog.layout = "layouts/application"
  # blog.summary_separator = /(READMORE)/
  # blog.summary_length = 250
  # blog.year_link = "{year}.html"
  # blog.month_link = "{year}/{month}.html"
  # blog.day_link = "{year}/{month}/{day}.html"
  # blog.default_extension = ".markdown"
  blog.tag_template = "tag.html"
  # Enable pagination
  # blog.paginate = true
  # blog.per_page = 10
  # blog.page_link = "page/{num}"
end

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
  proxy "#{tag}.html", "tag.html"
end
