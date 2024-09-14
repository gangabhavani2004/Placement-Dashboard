document.getElementById("roleDropdown").addEventListener("change", function() {
    var selectedRole = this.value;
    var buttonContainer = document.getElementById("buttonContainer");

    buttonContainer.innerHTML = "";

    if (selectedRole === "admin") {
        var adminButton = document.createElement("button");
        adminButton.textContent = "Admin";
        adminButton.addEventListener("click", function() {
            alert("You clicked Admin button");
            // Redirect to admin login page if needed
            window.location.href = "admin_login.html";
        });
        buttonContainer.appendChild(adminButton);
    } else if (selectedRole === "user") {
        var userButton = document.createElement("button");
        userButton.textContent = "User";
        userButton.addEventListener("click", function() {
            alert("You clicked User button");
            // Redirect to user login page if needed
            window.location.href = "user_login.html";
        });
        buttonContainer.appendChild(userButton);
    }
});
