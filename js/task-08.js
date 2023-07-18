const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();
  
  const dataObject = {
    email: loginForm.elements.email.value,
    password: loginForm.elements.password.value
  };
  
  if (dataObject.email === "" || dataObject.password === "") {
    return alert("Поля пусті");
  };

  loginForm.reset();
}


