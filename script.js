let currentIndex = 0;
const slides = document.querySelectorAll('.carousel img');
const totalSlides = slides.length;

function showSlide(index) {
    if (index < 0) {
        currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

setInterval(nextSlide, 15000);


