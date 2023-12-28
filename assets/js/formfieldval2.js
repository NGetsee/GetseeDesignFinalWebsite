document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('.get-quote-form');
    const nameInput = document.querySelector('#txtName');
    const emailInput = document.querySelector('#txtEmail');
    const phoneInput = document.querySelector('#phone_number');
    const subjectInput = document.querySelector('#msg_subject');
    const messageInput = document.querySelector('#message');
    const checkboxInput = document.querySelector('#chb2');
    const submitButton = document.querySelector('#requestCallback');

    // Initially disable the submit button
    submitButton.disabled = true;

    // Define custom error messages for each field
    const errorMessages = {
        nameInput: 'Please enter a valid name.',
        emailInput: 'Please enter a valid email address.',
        phoneInput: 'Please enter a valid phone number.',
        subjectInput: 'Please enter your subject.',
        messageInput: 'Write your message.',
        checkboxInput: 'Please accept the terms and privacy policy.',
    };

    // Add event listeners for input fields
    nameInput.addEventListener('input', validateFields);
    emailInput.addEventListener('input', validateFields);
    phoneInput.addEventListener('input', validateFields);
    subjectInput.addEventListener('input', validateFields);
    messageInput.addEventListener('input', validateFields);
    checkboxInput.addEventListener('change', validateFields);

    function validateFields() {
        const isNameValid = /^[A-Za-z\s']+ [A-Za-z\s']+$/i.test(nameInput.value.trim());
        const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(emailInput.value.trim());
        const isPhoneValid = /^[\d\s-]{10,}$/.test(phoneInput.value.trim());
        const isSubjectValid = subjectInput.value.trim() !== '';
        const isMessageValid = messageInput.value.trim() !== '';
        const isCheckboxValid = checkboxInput.checked;

        // Update error messages with custom messages
        displayError(nameInput, isNameValid, 'nameErrorMessage', errorMessages.nameInput);
        displayError(emailInput, isEmailValid, 'emailErrorMessage', errorMessages.emailInput);
        displayError(phoneInput, isPhoneValid, 'phoneErrorMessage', errorMessages.phoneInput);
        displayError(subjectInput, isSubjectValid, 'subjectErrorMessage', errorMessages.subjectInput);
        displayError(messageInput, isMessageValid, 'messageErrorMessage', errorMessages.messageInput);
        displayError(checkboxInput, isCheckboxValid, 'checkboxErrorMessage', errorMessages.checkboxInput);

        // Enable or disable the form submission button based on validation
        submitButton.disabled = !(isNameValid && isEmailValid && isPhoneValid && isSubjectValid && isMessageValid && isCheckboxValid);
    }

    function displayError(input, isValid, errorMessageId, customErrorMessage) {
        const errorMessageElement = document.querySelector(`#${errorMessageId}`);
        errorMessageElement.textContent = isValid ? '' : customErrorMessage;
    }
});
