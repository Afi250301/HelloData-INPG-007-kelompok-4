if (localStorage.getItem("isLogin") == "false" || localStorage.getItem("isLogin") == null) {
  this.form = document.getElementById("logInForm");

  this.form.addEventListener("submit", e => {
      e.preventDefault();
      if ((document.getElementById("lemail").value == localStorage.getItem("email")) && (document.getElementById("lpassword").value == localStorage.getItem("password"))) {
        localStorage.setItem("isLogin", "true");
        document.getElementById("lemail").value = "";
      }
      location.replace("home.html");
  });
} else {
  document.getElementById("loginButton").classList.add("d-none");
  document.getElementById("userButton").classList.remove("d-none");
  document.getElementById("signupButton").classList.add("d-none");
  document.getElementById("signoutButton").classList.remove("d-none");
  document.getElementById("userButton").innerHTML = localStorage.getItem("username")
}