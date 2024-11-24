let currentIndex = 0; // Current slide index
const slides = document.querySelectorAll('.slide'); // Select all slides
const totalSlides = slides.length; // Total number of slides

function showSlide(index) {
    const slidesContainer = document.querySelector('.slides');
    const offset = -index * 100; // Calculate the offset
    slidesContainer.style.transform = `translateX(${offset}%)`; // Move the slides
}

// Function to go to the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Loop back to the first slide
    showSlide(currentIndex);
}

// Automatically change slide every 3 seconds
setInterval(nextSlide, 3000); // Change slide every 3000 milliseconds (3 seconds)