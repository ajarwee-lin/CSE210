const temp = document.querySelector("#temp").textContent;
const windspeed = document.querySelector("#wind-speed").textContent;
const windchill = document.querySelector("#wind-chill");

if (windspeed >= 3 && temp <= 50) {
    chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));
    windchill.innerHTML = chill + "&#8457;";
}