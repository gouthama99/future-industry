function toggleSection(sectionId) {
    var sections = document.querySelectorAll('section');
    for (var i = 0; i < sections.length; i++) {
        if (sections[i].id === sectionId) {
            sections[i].classList.toggle('hidden');
        } else {
            sections[i].classList.add('hidden');
        }
    }
}

let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll('.slides img');
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
    slides[slideIndex].style.display = 'block';
}

function nextSlide() {
    slideIndex++;
    showSlides();
}

function prevSlide() {
    slideIndex--;
    showSlides();
}
// Hide all sections except the home page when the page is loaded
window.onload = function() {
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        if (section.id !== 'Home') {
            section.classList.add('hidden');
        }
    });
};

// Toggle section visibility function remains the same
function toggleSection(sectionId) {
    var sections = document.querySelectorAll('section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].classList.add('hidden');
    }
    document.getElementById(sectionId).classList.remove('hidden');
}
