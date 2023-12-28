document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('.get-quote-from');
    const submitButton = document.querySelector('#requestCallback');
    const nameInput = document.querySelector('#txtName');
    const emailInput = document.querySelector('#txtEmail');
    const phoneInput = document.querySelector('[name="phone_number"]');
    const servicesInput = document.querySelector('[name="services"]');

    // Function to validate email format
    function isValidEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }

    // Function to validate phone number format
    function isValidPhoneNumber(phone) {
        // You can add your phone number format validation logic here
        // Example: return true if the format is valid, otherwise return false
        // For simplicity, you can use a regular expression.
        // Modify the regular expression to match your desired phone number format.
        const phonePattern = /^[0-9]{10}$/; // Example format: 1234567890
        return phonePattern.test(phone);
    }

    function updateButtonState() {
        // Check if any of the fields are empty or services are not selected
        if (
            nameInput.value.trim() !== '' &&
            emailInput.value.trim() !== '' &&
            phoneInput.value.trim() !== '' &&
            servicesInput.value !== 'Services Required' &&
            isValidEmail(emailInput.value.trim()) &&
            isValidPhoneNumber(phoneInput.value.trim())
        ) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    }

    // Disable the submit button initially
    submitButton.disabled = true;

    // Add input event listeners to each input field
    nameInput.addEventListener('input', updateButtonState);
    emailInput.addEventListener('input', updateButtonState);
    phoneInput.addEventListener('input', updateButtonState);
    servicesInput.addEventListener('input', updateButtonState);

    form.addEventListener('submit', function (e) {
        // Check the form's validity one last time before submission
        if (submitButton.disabled) {
            e.preventDefault(); // Prevent the form from submitting
            alert('Please fill out all required fields and use a valid email and phone number.');
        } else {
            // Use SweetAlert to show a success message
            Swal.fire({
                title: 'Consultation Request',
                text: 'Thanks for contacting us!',
                icon: 'success',
                confirmButtonColor: 'red',
                confirmButtonClass: 'white-text',
                confirmButtonText: 'OK',
                timer: 3000,
            }).then(function () {
                // Submit the form after the user clicks OK
                form.submit();
            });
        }
    });
});
