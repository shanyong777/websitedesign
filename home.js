function toggleMute() {
    var audio = document.getElementById("backgroundMusic");
    var muteButton = document.getElementById("muteButton");

    audio.muted = !audio.muted; // Toggle the muted state

    // Change the button text based on the muted state
    muteButton.textContent = audio.muted ? "Unmute" : "Mute";
}

function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
}

// Add an event listener to the toggle button or icon
document.querySelector('.navbar .toggle-sidebar').addEventListener('click', toggleSidebar);


const backToTopButton = document.getElementById("back-to-top");

// Event listener for scrolling
window.addEventListener("scroll", function () {
  if (window.pageYOffset > windowHeight / 2) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

// Event listener for back-to-top button click
backToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Smooth scrolling animation
  });
});
