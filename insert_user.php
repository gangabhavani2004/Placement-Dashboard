<?php
// Database configuration
$servername = "localhost";
$username = "root";
$password = ""; // Assuming you have no password set for the database
$database = "placements";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo "Connected successfully"; // Output this to ensure the connection is established
}

// Get data sent from client-side JavaScript
$newEmail = $_POST['newEmail']; // Assuming you're sending data using POST method
$newPassword = $_POST['newPassword'];
$userType = $_POST['registerUserType'];

// Prepare and bind SQL statement to insert user data
$stmt = $conn->prepare("INSERT INTO users (mail, password, user_type) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $newEmail, $newPassword, $userType);

// Execute SQL statement
$response = array();
if ($stmt->execute()) {
    // If insertion successful, send success response to client
    $response['success'] = true;
} else {
    // If insertion failed, send failure response to client
    $response['success'] = false;
}

// Close statement and connection
$stmt->close();
$conn->close();

// Send response back to client
header('Content-Type: application/json');
echo json_encode($response);
?>
