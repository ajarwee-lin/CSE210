const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Carlsbad%20CA?unitGroup=us&key=U2JTGX8W6GCJJRMTT5UWTCGQN&contentType=json";

const getWeather = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);



    let image = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${data.currentConditions.icon}.svg`;


    document.querySelector("#weather-icon").src = image;
    document.querySelector('#weather-icon').alt= data.currentConditions.conditions + ' icon';

    document.querySelector("#temperature").innerHTML = data.currentConditions.temp;
    document.querySelector("#condition").innerHTML = data.currentConditions.conditions;
    document.querySelector("#humidity").innerHTML = data.currentConditions.humidity;

    document.querySelector("#day1").innerHTML = data.days[0].datetime;
    document.querySelector("#minTemp").innerHTML = data.days[0].tempmin;
    document.querySelector("#maxTemp").innerHTML = data.days[0].tempmax;
    document.querySelector("#day2").innerHTML = data.days[1].datetime;
    document.querySelector("#minTemp2").innerHTML = data.days[1].tempmin;
    document.querySelector("#maxTemp2").innerHTML = data.days[1].tempmax;
    document.querySelector("#day3").innerHTML = data.days[2].datetime;
    document.querySelector("#minTemp3").innerHTML = data.days[2].tempmin;
    document.querySelector("#maxTemp3").innerHTML = data.days[2].tempmax;
  };
getWeather();