const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CN = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CN);
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  paintGreeting();
}

function paintGreeting() {
  greeting.classList.remove(HIDDEN_CN);
  greeting.innerText = `Hello ${localStorage.getItem(USERNAME_KEY)}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CN);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting();
}
