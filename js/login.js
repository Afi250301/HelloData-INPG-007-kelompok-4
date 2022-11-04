if (localStorage.getItem("isLogin") == "false" || localStorage.getItem("isLogin") == null) {
  this.form = document.getElementById("logInForm");

  this.form.addEventListener("submit", e => {
      e.preventDefault();
      if ((document.getElementById("lemail").value == localStorage.getItem("email")) && (document.getElementById("lpassword").value == localStorage.getItem("password"))) {
        localStorage.setItem("isLogin", "true");
        document.getElementById("lemail").value = "";
      }
      location.reload();
  });
} else {
  document.getElementById("loginNav").classList.add("d-none");
  document.getElementById("userNav").classList.remove("d-none");
  document.getElementById("signupNav").classList.add("d-none");
  document.getElementById("signoutNav").classList.remove("d-none");
  document.getElementById("userNav").innerHTML = localStorage.getItem("username")
}