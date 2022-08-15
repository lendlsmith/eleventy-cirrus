rm -rf _site
ELEVENTY_ENV=production eleventy
rsync -azP _site/ django@your_server.com/{{cookiecutter.host_name}}
