console.log('Script loaded');

const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel-image');
let currentIndex = 0;

// Button event listeners
document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = images.length - 1; // Wrap to the last image
    }
    updateCarousel();
});

document.getElementById('next-btn').addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Wrap to the first image
    }
    updateCarousel();
});

// Function to update the carousel
function updateCarousel() {
    const imageWidth = carousel.offsetWidth; // Get the width of the carousel container
    carousel.style.transform = `translateX(${-currentIndex * imageWidth}px)`; // Slide based on image width
}
