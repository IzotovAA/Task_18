"use strict";

let slideIndex = 1;

const slides = document.querySelectorAll(".projects-slider-element");
const nextButton = document.querySelector(".projects-slider-arrow-right");
const previousButton = document.querySelector(".projects-slider-arrow-left");
const rostovAdmiral = document.querySelector(".projects-list__item1");
const sochi = document.querySelector(".projects-list__item2");
const rostovPatriotic = document.querySelector(".projects-list__item3");
const city = document.querySelector(".projects-info-detail__item1");
const area = document.querySelector(".projects-info-detail__item2");
const dot1 = document.querySelector(".projects-slider-dot1");
const dot2 = document.querySelector(".projects-slider-dot2");
const dot3 = document.querySelector(".projects-slider-dot3");

nextButton.addEventListener("click", () => {
    nextSlide();
});
previousButton.addEventListener("click", () => {
    previousSlide();
});

rostovAdmiral.addEventListener("click", () => {
    showSlide((slideIndex = 1));
});

sochi.addEventListener("click", () => {
    showSlide((slideIndex = 2));
});

rostovPatriotic.addEventListener("click", () => {
    showSlide((slideIndex = 3));
});

dot1.addEventListener("click", () => {
    showSlide((slideIndex = 1));
});

dot2.addEventListener("click", () => {
    showSlide((slideIndex = 2));
});

dot3.addEventListener("click", () => {
    showSlide((slideIndex = 3));
});

document.addEventListener("DOMContentLoaded", showSlide(slideIndex));

function nextSlide() {
    showSlide((slideIndex += 1));
}

function previousSlide() {
    showSlide((slideIndex -= 1));
}

function showSlide(n) {
    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    rostovAdmiral.className = "projects-list__item1";
    sochi.className = "projects-list__item2";
    rostovPatriotic.className = "projects-list__item3";
    dot1.className = "projects-slider-dot1";
    dot2.className = "projects-slider-dot2";
    dot3.className = "projects-slider-dot3";

    slides.forEach((element) => {
        element.style.display = "none";
    });

    slides[slideIndex - 1].style.display = "block";

    if (slideIndex === 1) {
        city.textContent = "Rostov-on-Don LCD admiral";
        area.textContent = "81 m2";
        rostovAdmiral.className = "projects-list__item1 active";
        dot1.className = "projects-slider-dot1 active";
    } else if (slideIndex === 2) {
        city.textContent = "Sochi thieves";
        area.textContent = "85 m2";
        sochi.className = "projects-list__item2 active";
        dot2.className = "projects-slider-dot2 active";
    } else {
        city.textContent = "Rostov-on-Don patriotic";
        area.textContent = "78 m2";
        rostovPatriotic.className = "projects-list__item3 active";
        dot3.className = "projects-slider-dot3 active";
    }
}
