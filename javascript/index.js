function updateBerlinTime() {
  let berlinElement = document.querySelector("#berlin");
  let berlinDateElement = berlinElement.querySelector(".date");
  let berlinTimeElement = berlinElement.querySelector(".current-time");
  let berlinDate = moment().tz("Europe/Berlin");

  berlinDateElement.innerHTML = berlinDate.format("MMMM Do YYYY");
  berlinTimeElement.innerHTML = berlinDate.format(
    "HH:mm:ss [<small>]A[</small>]"
  );
}

setInterval(updateBerlinTime, 1000);

function updateLisbonTime() {
  let lisbonElement = document.querySelector("#lisbon");
  let lisbonDateElement = lisbonElement.querySelector(".date");
  let lisbonTimeElement = lisbonElement.querySelector(".current-time");
  let lisbonDate = moment().tz("Europe/Lisbon");

  lisbonDateElement.innerHTML = lisbonDate.format("MMMM Do YYYY");
  lisbonTimeElement.innerHTML = lisbonDate.format(
    "HH:mm:ss [<small>]A[</small>]"
  );
}

function updateCity(event) {
  let cityTimezone = event.target.value;
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = ` <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="current-time">${cityTime.format(
            "HH:mm:ss [<small>]A[</small>]"
          )}</div>
        </div>
  `;
}
setInterval(updateLisbonTime, 1000);

let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);
