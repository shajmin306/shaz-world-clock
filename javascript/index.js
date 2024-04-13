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
setInterval(updateLisbonTime, 1000);
