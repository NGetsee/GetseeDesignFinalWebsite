document.addEventListener("DOMContentLoaded", function () {
    // Find the button with the ID "requestCallback"
    const requestButton = document.querySelector('#requestCallback');

    // Add a click event listener to the button
    requestButton.addEventListener('click', function() {
        // Show a custom styled alert using SweetAlert2 with a timer
        Swal.fire({
            title: 'Consultation Request',
            text: 'Thanks for contacting us!',
            icon: 'success', // You can use 'success', 'error', 'warning', or 'info'
            confirmButtonColor: 'red', // Change to your desired background color
            confirmButtonClass: 'white-text', // Change to white text
            confirmButtonText: 'OK',
            timer: 3000 // Display for 3 seconds (3000 milliseconds)
        });

        // Optionally, submit the form
        document.forms["frmContact"].submit();
    });
});
