<!DOCTYPE html>
<html>
<head>
    <title>Retrieve Data</title>
</head>
<body>
    <button id="retrieveDataBtn">See placement details</button>
    <div id="dataContainer"></div>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        $(document).ready(function(){
            $("#retrieveDataBtn").click(function(){
                // Hide the button after clicking
                $(this).hide();

                $.ajax({
                    url: "retrieve_data.php",
                    type: "GET",
                    success: function(response){
                        $("#dataContainer").html(response);
                    }
                });
            });
        });
    </script>

    <?php
    // Check if the request method is GET and if it is made via AJAX
    if ($_SERVER["REQUEST_METHOD"] == "GET" && isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
        // Database connection settings
        $servername = "localhost"; // Change this if your database is hosted elsewhere
        $username = "root"; // Change this to your database username
        $password = ""; // Change this to your database password
        $dbname = "placement"; // Change this to your database name

        // Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);

        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        // SQL query to retrieve data (change this according to your database structure)
        $sql = "SELECT * FROM students_placed";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            // Output data of each row
            while($row = $result->fetch_assoc()) {
                echo "Name: " . $row["name"]. " - Registration Number: " . $row["regNo"]. " - Placed Company: " . $row["placedCompany"]. " - Registered Company: " . $row["registeredCompany"]. " - Package: " . $row["package"]. "<br>";
            }
        } else {
            echo "0 results";
        }

        $conn->close();
    }
    ?>
</body>
</html>
