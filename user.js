document.addEventListener("DOMContentLoaded", function() {
  var showSignUpLink = document.getElementById("showSignUp");
  showSignUpLink.addEventListener("click", function() {
    window.location.href = "user_signup.html";
  });

  var loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get login credentials
    var email = document.getElementById("Email").value;
    var password = document.getElementById("Password").value;

    // Retrieve stored signup data from localStorage
    var storedUserData = localStorage.getItem("userData");
    var userData = storedUserData ? JSON.parse(storedUserData) : [];

    // Check if user exists and credentials match
    var userExists = userData.some(function(user) {
      return user.email === email && user.password === password;
    });

    // Provide feedback based on the result
    if (userExists) {
      alert("Login successful!");
    } else {
      alert("Invalid username or password.");
    }
  });
});

