// JavaScript source code

        // JavaScript functions to handle button clicks for Section 1 and Section 2
        function navigateToPowder() {
            // Redirect to the target page with the anchor tag pointing to Section 1
            window.location.href = 'Portfolio.html#powder';
        }

        function navigateToCad() {
            // Redirect to the target page with the anchor tag pointing to Section 2
            window.location.href = 'Portfolio.html#cad';
        }
                  function navigateToSpecialized() {
            // Redirect to the target page with the anchor tag pointing to Section 2
            window.location.href = 'Portfolio.html#specialized';
        }
                  function navigateToUpholstry() {
            // Redirect to the target page with the anchor tag pointing to Section 2
            window.location.href = 'Portfolio.html#upholstry';
        }
  


  window.addEventListener('DOMContentLoaded', function () {
    var fragmentIdentifier = window.location.hash;
    var cadElement = document.getElementById('cad');
    
    if (fragmentIdentifier === '#cad' && cadElement) {
        // Scroll to the "cad" element, aligning it with the top of the viewport
        cadElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
  


  window.addEventListener('DOMContentLoaded', function () {
    var fragmentIdentifier = window.location.hash;
    var specialengElement = document.getElementById('specialeng');
    
    if (fragmentIdentifier === '#specialeng' && specialengElement) {
        // Scroll to the "cad" element, aligning it with the top of the viewport
        specialengElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
  
   


  window.addEventListener('DOMContentLoaded', function () {
    var fragmentIdentifier = window.location.hash;
    var upholstryservElement = document.getElementById('upholstryserv');
    
    if (fragmentIdentifier === '#upholstryserv' && specialengElement) {
        // Scroll to the "cad" element, aligning it with the top of the viewport
        upholstryservElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
  