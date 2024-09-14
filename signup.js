document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    // You can add your signup form processing logic here
    // For demonstration, we'll simulate successful signup and show a message
    const formData = new FormData(this);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });
    console.log("Signup successful!", formDataObject); // Log the form data
    // Display a success message
    displaySuccessMessage();
    // Clear the input fields
    clearForm();
  });
  
  function displaySuccessMessage() {
    const signupContainer = document.querySelector(".signup-container");
    const successMessage = document.createElement("p");
    successMessage.textContent = "Signup successful!";
    successMessage.style.color = "white";
    signupContainer.appendChild(successMessage);
  }
  
  function clearForm() {
    document.getElementById("signupForm").reset();

  }



  