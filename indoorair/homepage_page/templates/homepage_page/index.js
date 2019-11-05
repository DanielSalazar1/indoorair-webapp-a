function onContactClick() {
  window.location.href = "/contact";
}

function onRegisterClick() {
  window.location.href  = "{% url 'register_page' %}";
}

function onGetVersionClick() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        const dataString = this.responseText
        const dataDict = JSON.parse(dataString);

        var element = document.getElementById('getVersionId');
        element.innerHTML = dataDict.version;
      }
    };
    xhttp.open('GET', 'api/version', true);
    xhttp.send();
}

function onLoginClick() {
  window.location.href = "{% url 'login_page' %}";
}
