module ApplicationHelpers
  def svg(name)
    root = Middleman::Application.root
    images_path = config[:images_dir]
    file_path = "#{root}/source/#{images_path}/#{name}.svg"

    return File.read(file_path) if File.exists?(file_path)
    "(SVG not found)"
  end

  def form_path
    "https://goo.gl/forms/D72gzFDcTB1w8aql2"
  end

  def material_icon(icon)
    content_tag :i, icon, class: "material-icons"
  end
end
