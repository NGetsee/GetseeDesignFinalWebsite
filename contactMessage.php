<?php
require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Database connection code
$con = mysqli_connect('localhost', 'root', '', 'db_contact');

// Initialize variables to store form data
$txtName = '';
$txtEmail = '';
$message = '';
$phoneNumber = '';
$emailMessage = '';
$subject= '';

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the post records
    $txtName = $_POST['txtName'];
    $txtEmail = $_POST['txtEmail'];
    $phoneNumber =$_POST['phone_number'];
    $emailMessage = $_POST['message'];
    $subject= $_POST['msg_subject'];

    // Database insert SQL code (you should use prepared statements for security)
   $sql = "INSERT INTO `tbl_contactmessage` (`Id`,`fldName`, `fldEmail`, `fldPhone`,`fldSubject`,`fldMessage` ) VALUES (null,?, ?, ?, ?, ?)";

    // Use prepared statements to avoid SQL injection0
    $stmt = mysqli_prepare($con, $sql);
    mysqli_stmt_bind_param($stmt, "sssss", $txtName, $txtEmail,$phoneNumber,$subject,$emailMessage);
    
    if (mysqli_stmt_execute($stmt)) {
        // Database records inserted successfully

        // Create a new PHPMailer instance for sending user confirmation
        $userEmail = new PHPMailer(true);

        try {
            // Server settings for user confirmation
            $userEmail->isSMTP();
            $userEmail->SMTPDebug = SMTP::DEBUG_OFF; // Set to SMTP::DEBUG_SERVER for debugging
            $userEmail->Host = 'smtp.outlook.com'; 
            $userEmail->SMTPAuth = true;
            $userEmail->Username = 'NGiblin1988@outlook.com'; // My email address
            $userEmail->Password = 'gETSEE23*'; // My email password
            $userEmail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Using 'tls' 
            $userEmail->Port = 587; // Use the appropriate port

            // Sender and recipient (to the person filling out the form)
            $userEmail->setFrom('NGiblin1988@outlook.com', 'Nicola Giblin');
            $userEmail->addAddress($txtEmail, $txtName,$phoneNumber);

            // Email content (to the person filling out the form)
            $userEmail->isHTML(true);
            $userEmail->Subject = 'Thank You for Contacting Us';
            $userEmail->Body = "Dear $txtName,\n\n";
            $userEmail->Body .= "Thank you for filling out the form on our website\n";
           // $userEmail->Body .= "Message: $message\n\n";
            $userEmail->Body .= "We will get back to you soon.\n\n";
            $userEmail->Body .= "Best regards,\nGetsee Design";

            // Send the email to the person filling out the form
            $userEmail->send();

            // Create a new PHPMailer instance for sending notification to myself
            $notificationEmail = new PHPMailer(true);

            try {
                // Server settings for notification email
                $notificationEmail->isSMTP();
                $notificationEmail->SMTPDebug = SMTP::DEBUG_OFF; // Set to SMTP::DEBUG_SERVER for debugging
                $notificationEmail->Host = 'smtp.outlook.com'; 
                $notificationEmail->SMTPAuth = true;
                $notificationEmail->Username = 'NGiblin1988@outlook.com'; // My email address
                $notificationEmail->Password = 'gETSEE23*'; // My email password
                $notificationEmail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Using 'tls' 
                $notificationEmail->Port = 587; 

                // Sender and recipient (notification to meyself)
                $notificationEmail->setFrom('NGiblin1988@outlook.com', 'Nicola Giblin');
                $notificationEmail->addAddress('NGiblin1988@outlook.com', 'Nicola Giblin'); // My email and name

                // Email content (notification to myself)
                $notificationEmail->isHTML(true);
                $notificationEmail->Subject = 'Form Submission Notification';
               $notificationEmail->Body = 'A form submission has been received from ' . $txtName . ' (' . $txtEmail . ') with phone number: ' . $phoneNumber . ' and subject: ' . $emailMessage;

                $notificationEmail->send();
                
                // Redirect to the homepage
                header('Location: index.html'); 
                exit; // Exit to prevent further script execution

            } catch (Exception $e) {
                echo 'Error sending notification email: ' . $notificationEmail->ErrorInfo;
            }
            
        } catch (Exception $e) {
            echo 'Error sending user confirmation email: ' . $userEmail->ErrorInfo;
        }
    } else {
        echo "Error inserting into the database: " . mysqli_error($con);
    }

    // Close the prepared statement
    mysqli_stmt_close($stmt);
}

// Close the database connection
mysqli_close($con);
?>
