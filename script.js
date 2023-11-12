constslider = document.querySelector('.slider');
       const slides = document.querySelectorAll('.slide');
       const radioButtons = document.querySelectorAll('input[type="radio"]');
       const prevButton = document.getElementById('prevBtn');
       const nextButton = document.getElementById('nextBtn');

let currentIndex = 0;

// Function to update the currently displayed slide
const updateSlide = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
};

// Event listener for radio button changes
radioButtons.forEach((radio, index) => {
    radio.addEventListener('change', () => {
        currentIndex = index;
        updateSlide();
    });
});

// Event listener for the "Previous" button
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + radioButtons.length) % radioButtons.length;
    radioButtons[currentIndex].checked = true;
    updateSlide();
});

// Event listener for the "Next" button
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % radioButtons.length;
    radioButtons[currentIndex].checked = true;
    updateSlide();
});

updateSlide(); // Initial slide update
// Get references to the search input and button
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchResults = document.getElementById('search-results');

// Add a click event listener to the search button
searchButton.addEventListener('click', function () {
    search();
});









    
