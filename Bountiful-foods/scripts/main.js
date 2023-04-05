const apiURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Los%20Angeles%2C%20California?unitGroup=metric&key=B7NKJ24KZHZ58EX3SH9EE8J9E&contentType=json";
const getWeather = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
    let t = data.currentConditions.temp;
    document.querySelector('#t').textContent = Math.round(t * 5/9 +32 );
    let image = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${data.currentConditions.icon}.svg`;
document.querySelector('#ws').textContent = data.currentConditions.windspeed;
document.querySelector('#condition').textContent =  data.currentConditions.conditions;
document.querySelector('#weather_icon').src = image;
document.querySelector('#weather_icon').alt= data.currentConditions.conditions + ' icon';
};

getWeather();


const newsAPIURL = "https://newsapi.org/v2/everything?q=Los-Angeles-California-Food&sortBy=publishedAt&apiKey=2e9124a7be4943789b86e0761026ee46";
const getNews = async () => {
    const response = await fetch(newsAPIURL);
    const data = await response.json();
    console.log(data);

    for (let index = 0; index < 3; index++) {
        let newsArticle = data.articles[index];

        console.log(newsArticle.title);
        let tittle = document.querySelector(`#news${index} h3`);
        tittle.textContent = newsArticle.title;

        console.log(newsArticle.description);
        let description = document.querySelector(`#news${index} p`);
        description.textContent = newsArticle.description;

        console.log(newsArticle.urlToImage);
        let image = document.querySelector(`#news${index} img`);
        image.src = newsArticle.urlToImage;
    }
}

getNews();