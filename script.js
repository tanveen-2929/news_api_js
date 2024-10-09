const key="531ed443f72cff406af309c6ea69d0bb";
function getNews(c){
    url = 'https://gnews.io/api/v4/top-headlines?category=' + c + '&lang=en&country=in&apikey=' + key;
    getData(url) }

function searchNews(e){
  e.preventDefault()
  var q=$('#query').val();
  url = 'https://gnews.io/api/v4/search?q=' + q + '&lang=en&country=in&apikey=' + key;
  getData(url)
}


function getData(url){
  var content=""
  // fetch(url)
  // .then((response) => response.json())
  // .then((data)=> {

    $.getJSON(url,function(data){
      $('#news-result').empty()
    articles = data.articles;
    $.each(articles, function(key,article){
    content+=`<div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${article.image}" class="w-100 rounded-start" alt="${article.title}" height="250px">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${article.title}</h5>
                <p class="card-text">${article.description}</p>
                <p class="card-text"><small class="text-muted">${article.publishedAt}</small></p>
                <a href="${article.url}" class="btn btn-dark">Read Full Article</a>
              </div>
            </div>
          </div>
        </div>`
       })
       $('#news-result').append(content)
})
}



