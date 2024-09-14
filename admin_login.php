<?php
$servername = "localhost";
$username = "root"; // Replace with your MySQL username
$password = ""; // Replace with your MySQL password
$database = "placement"; // Replace with your MySQL database name

// Create connection
$conn = new mysqli($servername, $username, $password, $database);
   if($_SERVER["REQUEST_METHOD"] == "POST") {
      // username and password sent from form 
      
      $myusername = mysqli_real_escape_string($conn,$_POST['email']);
      $mypassword = mysqli_real_escape_string($conn,$_POST['password']); 
      
      $sql = "SELECT name FROM admin_login WHERE email = '$myusername' and password = '$mypassword'";
      $result = mysqli_query($conn,$sql);
      $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
     
      
      $count = mysqli_num_rows($result);
      
      // If result matched $myusername and $mypassword, table row must be 1 row
		
      if($count == 1) {

         echo "Successully login";
      }else {
        echo "Invalid password";
      }
   }

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if email and password are provided
    if(isset($_POST["email"]) && isset($_POST["password"])) {
        // Validate email and password (you can add your validation logic here)

        // Redirect to inside_page.html
        header("Location: inside_page_admin.html");
        exit(); // Ensure that no further code is executed after redirection
    } else {
        // Handle if email or password is not provided
        echo "Email and password are required!";
    }
}

?>
