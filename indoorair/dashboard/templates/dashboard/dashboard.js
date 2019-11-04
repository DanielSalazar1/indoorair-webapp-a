// function getTemperature() {
//   cons temperature = document.getElementById('temperature').value;
//   console.log(temperature);
//
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//         result = JSON.parse(this.responseText);
//         document.getElementById('temperature').innerHTML = result.temperature;
//       }
//     };
//     xhttp.open('POST', "{% url 'temperature_page' %}", true);
//     xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded")
//     xhttp.send("temperature="+temperature);
// }

function getTemperature() {
  const temperature1 = document.getElementById('temperature').value;
  console.log(temperature1);

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var resultObj = JSON.parse(this.responseText);
        resultObj = document.getElementById('temperature_avg');
      }
    };
    xhttp.open('POST', "{% url 'temperature_page' %}", true);
    xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhttp.send("&temperature_avg="+temperature1);
}

function getPressure() {
  const pressure1 = document.getElementById('pressure').value;
  console.log(pressure1);

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var resultObj = JSON.parse(this.responseText);
        resultObj = document.getElementById('pressure_avg');
      }
    };
    xhttp.open('POST', "{% url 'pressure_page' %}", true);
    xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhttp.send("&pressure_avg="+pressure1);
}

function getCO2() {
  const co2a = document.getElementById('co2').value;
  console.log(co2a);

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var resultObj = JSON.parse(this.responseText);
        resultObj = document.getElementById('co2_avg');
      }
    };
    xhttp.open('POST', "{% url 'co2_page' %}", true);
    xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhttp.send("&co2_avg="+co2a);
}

function getTvoc() {
  const tvoc1 = document.getElementById('tvoc').value;
  console.log(tvoc1);

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var resultObj = JSON.parse(this.responseText);
        resultObj = document.getElementById('tvoc_avg');
      }
    };
    xhttp.open('POST', "{% url 'tvoc_page' %}", true);
    xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhttp.send("&tvoc_avg="+tvoc1);
}

function getHumidity() {
  const humidity1 = document.getElementById('humidity').value;
  console.log(humidity1);

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var resultObj = JSON.parse(this.responseText);
        resultObj = document.getElementById('humidity_avg');
      }
    };
    xhttp.open('POST', "{% url 'humidity_page' %}", true);
    xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhttp.send("&humidity_avgs ="+humidity1);
}
