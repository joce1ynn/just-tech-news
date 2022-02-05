async function signupFormHandler(event) {
  event.preventDefault();

  // grab user data from the form
  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  //added a conditional to make sure that all fields have values before making the POST request.
  if (username && email && password) {
    // add the await keyword before the Promise
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    // check the response status
    if (response.ok) {
      // successful login returns to home page
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);

  