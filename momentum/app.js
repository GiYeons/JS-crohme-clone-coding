const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CN = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CN);
  console.log(username);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CN);
}

loginForm.addEventListener("submit", onLoginSubmit);
