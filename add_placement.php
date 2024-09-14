<?php
// Retrieve form data

$servername = "localhost";
$username = "root"; // Replace with your MySQL username
$password = ""; // Replace with your MySQL password
$database = "placement"; // Replace with your MySQL database name

// Create connection
$conn = new mysqli($servername, $username, $password, $database);
if(isset($_POST['submit'])){
$Name = $_POST['student_name'];
$RegNum = $_POST['roll_number'];
$placedCompany = $_POST['company_placed'];
$registeredCompany = $_POST['company_registered'];
$package = $_POST['package'];

echo $Name;
// Database connection parameters

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare and execute SQL statement to insert data into the database
$sql = "INSERT INTO students_placed(name,regNo,placedCompany,registeredCompany,package) VALUES ('$Name', '$RegNum', '$placedCompany','$registeredCompany','$package')";
if ($conn->query($sql) === TRUE) {
    // Data inserted successfully
    echo "New record created successfully";
} else {
    // Error occurred
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close connection
$conn->close();
}
?>
