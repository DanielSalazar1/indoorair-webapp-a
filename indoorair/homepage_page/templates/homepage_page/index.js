function onContactClick() {
  window.location.href = "/contact";
}

function onRegisterClick() {
  window.location.href  = "{% url 'register_page' %}";
}

function onVersionClick() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById('version').innerHTML = this.responseText;
      }
    };
    xhttp.open('GET', 'version', true);
    xhttp.send();
}

function onLoginClick() {
  window.location.href = "{% url 'login_page' %}";
}
