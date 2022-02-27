const slideImage = document.querySelectorAll(".slide-image");
const slidesContainer = document.querySelector(".slides-container");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const navigationDots = document.querySelector(".navigation-dots");

let numberOfImages = slideImage.length;

let currentSlide = 0;


// Set up the slider
function init() {

    /*
    slideImage[0] = 0
    slideImage[1] = 100%
    slideImage[2] = 200%
    */
    slideImage.forEach((img, i) => {
        img.style.left = i * 100 + "%";
    });

    slideImage[0].classList.add("active")

    createNavigationDots()
}

init();

// Create navigation dots
function createNavigationDots() {
    for(let i = 0; i < numberOfImages; i++) {
        const dot = document.createElement("div");
        dot.classList.add("single-dot");
        navigationDots.appendChild(dot);

        dot.addEventListener("click", () => {
            goToSlide(i);
        })

    }

    navigationDots.children[0].classList.add("active");
}

// Next Button
nextBtn.addEventListener("click", () => {
    if(currentSlide >= numberOfImages - 1) {
        goToSlide(0);
        return
    }
    currentSlide++;
    goToSlide(currentSlide);
});

// Prev Button
prevBtn.addEventListener("click", () => {
    if(currentSlide <= 0) {
        goToSlide(numberOfImages - 1);
        return
    }
    currentSlide--;
    goToSlide(currentSlide);
});

// Got To Slide
function goToSlide(slideNumber) {
    let slideWidth = slideImage[0].clientWidth;
    slidesContainer.style.transform = "translateX(-" + slideWidth * slideNumber  + "px)";

    currentSlide = slideNumber;

    setActiveClass();
}

// Set Active Class
function setActiveClass() {

    // Set active class for slide Image
    let currentActive = document.querySelector(".slide-image.active");
    currentActive.classList.remove("active");
    slideImage[currentSlide].classList.add("active")

    // Set active class for navigation dots
    let currentDot = document.querySelector(".single-dot.active");
    currentDot.classList.remove("active");
    navigationDots.children[currentSlide].classList.add("active")
}