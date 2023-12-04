<?php
// Replace with your actual MySQL connection details
$servername = "localhost";
$username = "root";
$password = "root";
$database = "getsee_design";

// Create a MySQL connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve form data
$name = $_POST["name"];
$email = $_POST["email"];


// Insert data into MySQL database
$sql = "INSERT INTO form_submission (name, email) VALUES ('$name', '$email')";

if ($conn->query($sql) === TRUE) {
    echo "Form data has been successfully submitted.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the MySQL connection
$conn->close();
?>
