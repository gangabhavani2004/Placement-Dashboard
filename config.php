<?php
// Retrieve form data
$Name = $_POST['Name'];
$Email = $_POST['Email'];
$Password = $_POST['Password'];

// Database connection parameters
$servername = "localhost";
$username = "root"; // Replace with your MySQL username
$password = ""; // Replace with your MySQL password
$database = "placement"; // Replace with your MySQL database name

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare and execute SQL statement to insert data into the database
$sql = "INSERT INTO user_login ('Name','Email','Password') VALUES ('$Name', '$Email', '$Password')";
if ($conn->query($sql) === TRUE) {
    // Data inserted successfully
    echo "New record created successfully";
} else {
    // Error occurred
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close connection
$conn->close();
?>
