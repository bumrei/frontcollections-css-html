let slides = document.querySelector(".slides")

let slide = document.querySelectorAll('.slides li')

let currentIdx = 0

let slideCount = slide.length

let slideWidth = 300,
    slideMargin = 30

let prevBtn = document.querySelector(".prev")
let nextBtn = document.querySelector(".next")

slides.style.width = (slideWidth + slideMargin) * slideCount - slideMargin + 'px';

function moveSlide(num) {
    slides.style.left = -num * 330 + 'px';
    currentIdx = num;
}

nextBtn.addEventListener('click', function() {
    if( currentIdx < slide.length - 3) {
        moveSlide(currentIdx + 1);
    } else {
        moveSlide(0)
    }
});

prevBtn.addEventListener('click', function() {
    if( currentIdx > 0) {
        moveSlide(currentIdx - 1);
    } else {
        moveSlide(slide.length - 3)
    }
});