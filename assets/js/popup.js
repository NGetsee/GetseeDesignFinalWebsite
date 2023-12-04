// popup.js

// Function to display a pop-up message
function displayPopup(message) {
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerHTML = `<p>${message}</p>`;
    document.body.appendChild(popup);

    // Close the pop-up when clicked
    popup.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Automatically close the pop-up after a few seconds (adjust the delay as needed)
    setTimeout(() => {
        popup.style.display = 'none';
    }, 5000); // 5 seconds
}

// Check if a query parameter named "status" exists in the URL
const urlParams = new URLSearchParams(window.location.search);
const status = urlParams.get('status');

// Check the status parameter and display the appropriate message
if (status === 'success') {
    displayPopup('Thank you for your request!');
} else if (status === 'error') {
    displayPopup('There was an error processing your request. Please try again later.');
}
