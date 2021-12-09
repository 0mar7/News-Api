let articles = [];

async function getNews(country, category) {

    let response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=f6bad2490230483593aeaf8d0977c212`);
    let finalResult = await response.json();
    articles = finalResult.articles;
    displayNews();
    console.log(articles);
};

// for display data
function displayNews() {

    let newsBox = ``;

    for (let i = 0; i < articles.length; i++) {
        
        newsBox += `<div class="col-md-6 col-lg-4 ">
        <div class="news-item text-white text-center">
            <img class="w-100 rounded-3" height='200' src="${articles[i].urlToImage?articles[i].urlToImage:'images/pic1.jpg'}" alt="news images">
            <div class='bg-gradient rounded-3 mt-2'>
            <h3 class='h6 pt-1'>${articles[i].title}</h3>
            <p class='h6 pt-1'>${articles[i].description}</p>
            </div>
        </div>
    </div>`
    }
    document.getElementById('rowNews').innerHTML = newsBox ;
};
// I made a dummy photo by The conditional (ternary) operator for null image in dispaly function//

// For Categories
let liItem = document.querySelectorAll('ul li');

for (let i = 0; i < liItem.length; i++) {
   
    liItem[i].addEventListener('click' , function(e){
        getNews('us' , e.target.innerHTML);
    });
};



