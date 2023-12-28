document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('.get-quote-from');
    const nameInput = document.querySelector('#txtName');
    const emailInput = document.querySelector('#txtEmail');
    const phoneInput = document.querySelector('#phone_number');
    const servicesInput = document.querySelector('[name="services"]');
    const nameError = document.querySelector('#nameErrorMessage');
    const emailError = document.querySelector('#emailErrorMessage');
    const phoneError = document.querySelector('#phoneErrorMessage');
    const servicesError = document.querySelector('#servicesError');

    // Disable the form submission button by default
    const submitButton = document.querySelector('#requestCallback');
    submitButton.disabled = true;

    // Check input fields' values on page load
    validateFields();

    // Add event listeners for input fields
    nameInput.addEventListener('input', validateFields);
    emailInput.addEventListener('input', validateFields);
    phoneInput.addEventListener('input', validateFields);
    servicesInput.addEventListener('change', validateFields);

    function validateFields() {
        const isNameValid = /^[A-Za-z\s']+ [A-Za-z\s']+$/i.test(nameInput.value.trim());
        const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(emailInput.value.trim());
        const isPhoneValid = /^[\d\s-]{10,}$/.test(phoneInput.value.trim());
        const isServicesValid = servicesInput.value !== 'Services Required';

        // Update error messages
        nameError.textContent = isNameValid ? '' : 'Please enter a valid name.';
        emailError.textContent = isEmailValid ? '' : 'Please enter a valid email address.';
        phoneError.textContent = isPhoneValid ? '' : 'Please enter a valid phone number.';
        servicesError.textContent = isServicesValid ? '' : 'Please select a service.';

        // Enable or disable the form submission button based on validation
        submitButton.disabled = !(isNameValid && isEmailValid && isPhoneValid && isServicesValid);
    }
});
