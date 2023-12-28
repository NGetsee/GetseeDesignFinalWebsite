document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('.get-quote-form');
    const submitButton = document.querySelector('#requestCallback');

    submitButton.addEventListener('click', function (e) {
        const nameInput = document.querySelector('#txtName');
        const emailInput = document.querySelector('#txtEmail');

        if (
            nameInput.value.trim() === '' ||
            emailInput.value.trim() === ''
        ) {
            e.preventDefault(); // Prevent the form from submitting
            return; // Do not continue with form submission
        }

        // Show a success message using SweetAlert
        Swal.fire({
            title: 'Consultation Request',
            text: 'Thanks for contacting us!',
            icon: 'success',
            confirmButtonColor: 'red',
            confirmButtonClass: 'white-text',
            confirmButtonText: 'OK',
            timer: 3000,
        });
    });
});

