<script>
    // Array to store existing emails
    var existingEmails = [];

    // Function to display the login form
    function showLoginForm() {
        document.getElementById('loginButtons').style.display = 'none';
        document.getElementById('loginForm').style.display = 'block';
        document.getElementById('registerForm').style.display = 'none';
        document.getElementById('wrongPasswordMessage').style.display = 'none'; // Hide wrong password message
    }

    // Function to display the registration form
    function showRegisterForm() {
        document.getElementById('loginButtons').style.display = 'none';
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('registerForm').style.display = 'block';
        document.getElementById('existingEmailMessage').style.display = 'none'; // Hide existing email message
        document.getElementById('registrationSuccessMessage').style.display = 'none'; // Hide registration success message
    }

    // Function to handle login process
    function login() {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var userType = document.getElementById('loginUserType').value;

        // For demonstration, let's assume any login is successful
        // Redirect to inside page after login
        window.location.href = "inside_page.html";
    }

    // Function to handle forgot password process
    function forgotPassword() {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('forgotPasswordForm').style.display = 'block';
    }

    // Function to handle registration process
    function register() {
        var newEmail = document.getElementById('newEmail').value;
        var newPassword = document.getElementById('newPassword').value;
        var userType = document.getElementById('registerUserType').value;

        // Check if email already exists (This should ideally be done on the server side)
        if (existingEmails.includes(newEmail)) {
            // Show message that an account already exists with this email
            document.getElementById('existingEmailMessage').style.display = 'block';
            document.getElementById('registrationSuccessMessage').style.display = 'none'; // Hide registration success message
            return; // Stop further execution
        }

        // Add new email to existing emails array
        existingEmails.push(newEmail);

        // Implement registration functionality based on email, password, and user type
        // For demonstration, let's assume registration is successful
        document.getElementById('registerForm').style.display = 'none'; // Hide registration form
        document.getElementById('registrationSuccessMessage').style.display = 'block'; // Show registration success message
        document.getElementById('loginButtons').style.display = 'block'; // Show login buttons
        document.getElementById('loginForm').style.display = 'block'; // Show login form
        document.getElementById('registerUserType').selectedIndex = 0; // Reset register user type
        document.getElementById('newEmail').value = ''; // Clear new email input
        document.getElementById('newPassword').value = ''; // Clear new password input
    }
</script>
