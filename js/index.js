const form = document.querySelector("form");
const email = document.getElementById("email");
const pass = document.getElementById("password");

form.addEventListener("click", event => {
  let data = event.target.id;
  console.log("TCL: data", data.id);
  if (data === "email") {
    if (email.parentElement.parentElement.classList.contains("inactive")) {
      email.parentElement.parentElement.classList.remove("inactive");
      email.parentElement.parentElement.classList.add("active");
      pass.parentElement.parentElement.classList.remove("active");
      pass.parentElement.parentElement.classList.add("inactive");
    }
  } else {
    if (pass.parentElement.parentElement.classList.contains("inactive")) {
      pass.parentElement.parentElement.classList.remove("inactive");
      pass.parentElement.parentElement.classList.add("active");
      email.parentElement.parentElement.classList.remove("active");
      email.parentElement.parentElement.classList.add("inactive");
    }
  }
});


