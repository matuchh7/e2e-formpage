const email = document.querySelector("#email");
const password = document.querySelector("#password");
const repeatPassword = document.querySelector("#repeat-password");

const registrationForm = document.querySelector("#registration-form");

const rules = document.querySelector("#rules");

const registrationFormContainer = document.querySelector("#form-container");
const welcomeScreen = document.querySelector("#welcome-screen");

function createUser(userData) {
  return fetch("http://localhost:9999/register", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

registrationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (password.value.length && password.value === repeatPassword.value) {
    createUser({
      email: email.value,
      password: password.value,
    })
      .then((response) => {
        if (response.ok) {
          registrationFormContainer.hidden = true;
          welcomeScreen.hidden = false;
        } else {
          console.log("Back-end error");
        }
      })
      .catch(() => {
        console.log("Back-end error");
      });
  }
});
