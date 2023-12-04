// Function to display a pop-up message
function displayPopup(message) {
    // Create the pop-up element
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerHTML = `<p>${message}</p>`;

    // Add the pop-up to the document body
    document.body.appendChild(popup);

    // Automatically close the pop-up after a few seconds (adjust the delay as needed)
    setTimeout(() => {
        document.body.removeChild(popup);
    }, 10000); // 10 seconds
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
