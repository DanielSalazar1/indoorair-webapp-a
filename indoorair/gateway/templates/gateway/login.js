function onLoginClick() {
  const username = document.getElementById("username").value;
  console.log(username)
  const password = document.getElementById("password").value;
  console.log(password);

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const login = this.responseText;
      var loginObject = JSON.parse(login);
      if (loginObject.was_successful === true) {
        window.location.href = "{% url 'dashboard' %}";
      } else {
        alert(loginObject.reason);
      }
    }
  }
  xhttp.open("POST", "{% url 'post_login_api' %}", true);
  xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
  const string = "username="+username+"&password="+password
  xhttp.send(string)
}
