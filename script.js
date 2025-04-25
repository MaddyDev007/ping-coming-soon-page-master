let submit = document.getElementById("submit");
let email = document.getElementById("email");
let error = document.getElementById("error");

if (submit && email && error) { 
  submit.addEventListener("click", function (e) {
    e.preventDefault();

    const emailValue = email.value.trim(); 

    if (emailValue === "") {
      error.innerHTML = "Email cannot be empty";
      error.style.color = "#ff5263";
      email.style.borderColor = "#ff5263";
      email.placeholder = "example@email/com"; 
      email.classList.remove("email");
    } else if (!emailValue.includes("@")) { 
      error.innerHTML = "Please provide a valid email address";
      error.style.color = "#ff5263";
      email.style.borderColor = "#ff5263";
    } else {
      error.innerHTML = "Email is valid!";
      email.style.borderColor = "green";
      error.style.color = "green";
    }
  });
} else {
  console.error("One or more elements were not found.");
}