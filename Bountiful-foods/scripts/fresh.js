var lastModified = document.lastModified;
let lastModifiedSpan = document.getElementById("lastModified");
lastModifiedSpan.innerHTML = lastModified;


const fruitsURL = "https://andejuli.github.io/wdd230/fruit.json";
const getFruits = async () => {
    const response = await fetch(fruitsURL);
    const data = await response.json();
    console.log(data);

    data.forEach(element => {
        var newoption = document.createElement("option");
        newoption.value = String(element.name);
        newoption.textContent = String(element.name);

        var select = document.getElementById('fruits');
        select.appendChild(newoption);
    });
}

getFruits();

var select = document.getElementById("fruits");
var output = document.getElementById("output");

    select.addEventListener("change", () => {
        var selectedOptions = select.;
            selectedOptions.forEach(element => {
                let fruit = document.createElement("h3");
                fruit.innerHTML = String(element);
                output.appendChild(fruit);
            });
        console.log(selectedOptions);
    });