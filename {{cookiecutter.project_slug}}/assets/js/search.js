document.addEventListener('DOMContentLoaded', function (event) {
  const search = document.getElementById('search');
  const results = document.getElementById('results');
  results.className = "row";
  let data = [];
  let search_term = '';

  fetch('/search.json')
    .then((response) => response.json())
    .then((data_server) => {
      data = data_server;
  });

  search.addEventListener('input', (event) => {
    search_term = event.target.value.toLowerCase();
    showList();
  });

  const showList = () => {
    results.innerHTML = '';
    if (search_term.length <= 0) return;
    const match = new RegExp(`${search_term}`, 'gi');
    let result = data.filter((name) => match.test(name.title));
    if (result.length == 0) {
      const div = document.createElement('div');
      div.className = "col-12 u-text-center";
      div.innerHTML = `<h4 class="no-result" style="margin-top: 15px;">No results found 😢</h4>`;
      results.appendChild(div);
    }
    result.forEach((item) => {
      const div = document.createElement('div');
      div.className = "col-4";
      div.innerHTML = `<div class="card">
          <h4>${ item.title }</h4>
          <p>${ item.description }</p>
          <a href="${ item.url }" class="button" style="display: block; width: 100%; padding: 8px; margin-top: 10px; text-align: center;">Read More >></a>
        </div>`;
      results.appendChild(div);
    });
  };

});
