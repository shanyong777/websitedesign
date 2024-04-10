$('.rating .fa-star').click(function() {
   $('.rating .active-rating').removeClass('active-rating');
   $(this).toggleClass('active-rating');
});

// Get the home button element
const homeButton = document.getElementById('homeButton');

// Add event listener for click event
homeButton.addEventListener('click', function() {
    window.location.href = 'index.html'; // Redirect to index.html
});
