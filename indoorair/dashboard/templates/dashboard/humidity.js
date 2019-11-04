var h = 30

function humidityRange(h) {
  if (humidity > 40) {
    console.log("High humidity");
  } else if (humidity < 20 ) {
    console.log("Dry");
  } else {
    console.log("Ok")
  }
  return h;
};


function getHumidity() {
  var inputElement = document.getElementById("humidity2");
  var value = parseInt(inputElement.value);
  var paragraphElement = document.getElementById("result");
  paragraphElement.innerHTML = humidityRange(value);
}
