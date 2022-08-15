const isDev = process.env.ELEVENTY_ENV === 'development';

module.exports = {
  site_url: isDev ? 'http://localhost:8080' : 'https://{{cookiecutter.host_name}}'
};
