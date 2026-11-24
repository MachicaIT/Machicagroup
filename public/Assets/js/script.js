// ===============================
// Mobile Menu
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// ===============================
// Mobile Dropdown
// ===============================

document.querySelectorAll(".dropdown > a").forEach(item => {

    item.addEventListener("click", function(e){

        if(window.innerWidth <= 768){

            e.preventDefault();
            this.parentElement.classList.toggle("active");

        }

    });

});

// ===============================
// Sticky Navbar on Scroll
// ===============================

window.addEventListener("scroll", function(){

    const navbar = document.querySelector(".nav-container");

    if(window.scrollY > 80){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});

// ===============================
// Reset Mobile Menu on Resize
// ===============================

window.addEventListener("resize", function(){

    if(window.innerWidth > 768){

        navLinks.classList.remove("active");

        document.querySelectorAll(".dropdown").forEach(drop => {
            drop.classList.remove("active");
        });

    }

});

// =========================================================
// SITE LOADER
// =========================================================

window.addEventListener("load", function () {

    const loader = document.getElementById("site-loader");

    if (loader) {

        setTimeout(function () {

            loader.classList.add("site-loader-hidden");

        }, 300);

    }

});

/* =========================================================
   ACCREDITATION SLIDER
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const slider = document.querySelector(".accreditation-slider");
    const sliderWindow = document.querySelector(".accreditation-window");
    const track = document.querySelector(".accreditation-track");
    const slides = document.querySelectorAll(".accreditation-slide");

    const prevButton = document.querySelector(".accreditation-prev");
    const nextButton = document.querySelector(".accreditation-next");
    const dots = document.querySelectorAll(".accreditation-dots button");

    if (!slider || !sliderWindow || !track || !slides.length) {
        return;
    }


    let currentIndex = 0;
    let autoSlide = null;


    /* =====================================================
       SETTINGS
    ===================================================== */

    const AUTO_SLIDE_TIME = 5000;


    /* =====================================================
       VISIBLE SLIDES
    ===================================================== */

    function getVisibleSlides() {
        return window.innerWidth <= 650 ? 1 : 3;
    }


    /* =====================================================
       MAXIMUM INDEX
    ===================================================== */

    function getMaxIndex() {
        return Math.max(
            0,
            slides.length - getVisibleSlides()
        );
    }


    /* =====================================================
       SET SLIDE WIDTH
    ===================================================== */

    function setSlideWidths() {

        const visibleSlides = getVisibleSlides();

        const containerWidth =
            sliderWindow.getBoundingClientRect().width;

        const gap =
            parseFloat(
                window.getComputedStyle(track).gap
            ) || 0;

        const slideWidth =
            (containerWidth -
                gap * (visibleSlides - 1)) /
            visibleSlides;


        slides.forEach(function (slide) {

            slide.style.flex =
                "0 0 " + slideWidth + "px";

        });

    }


    /* =====================================================
       UPDATE SLIDER
    ===================================================== */

    function updateSlider() {

        setSlideWidths();

        const slideWidth =
            slides[0].getBoundingClientRect().width;

        const gap =
            parseFloat(
                window.getComputedStyle(track).gap
            ) || 0;

        const movement =
            currentIndex * (slideWidth + gap);

        track.style.transform =
            "translate3d(-" + movement + "px, 0, 0)";


        /* Update dots */

        dots.forEach(function (dot, index) {

            dot.classList.toggle(
                "active",
                index === currentIndex
            );

        });

    }


    /* =====================================================
       NEXT / PREVIOUS
    ===================================================== */

    function nextSlide() {

        currentIndex =
            currentIndex >= getMaxIndex()
                ? 0
                : currentIndex + 1;

        updateSlider();

    }


    function previousSlide() {

        currentIndex =
            currentIndex <= 0
                ? getMaxIndex()
                : currentIndex - 1;

        updateSlider();

    }


    /* =====================================================
       AUTO SLIDE
    ===================================================== */

    function startAutoSlide() {

        clearInterval(autoSlide);

        autoSlide = setInterval(
            nextSlide,
            AUTO_SLIDE_TIME
        );

    }


    function restartAutoSlide() {

        startAutoSlide();

    }


    /* =====================================================
       BUTTONS
    ===================================================== */

    if (prevButton) {

        prevButton.addEventListener("click", function (e) {

            e.preventDefault();

            previousSlide();

            restartAutoSlide();

        });

    }


    if (nextButton) {

        nextButton.addEventListener("click", function (e) {

            e.preventDefault();

            nextSlide();

            restartAutoSlide();

        });

    }


    /* =====================================================
       DOTS
    ===================================================== */

    dots.forEach(function (dot, index) {

        dot.addEventListener("click", function (e) {

            e.preventDefault();

            if (index <= getMaxIndex()) {

                currentIndex = index;

                updateSlider();

                restartAutoSlide();

            }

        });

    });


    /* =====================================================
       PAUSE ON HOVER
    ===================================================== */

    slider.addEventListener("mouseenter", function () {
        clearInterval(autoSlide);
    });


    slider.addEventListener("mouseleave", function () {
        startAutoSlide();
    });


    /* =====================================================
       RESIZE
    ===================================================== */

    window.addEventListener("resize", function () {

        currentIndex =
            Math.min(
                currentIndex,
                getMaxIndex()
            );

        updateSlider();

    });


    /* =====================================================
       INITIALIZE
    ===================================================== */

    updateSlider();
    startAutoSlide();

});

/*
|--------------------------------------------------------------------------
| CHARACTER COUNT
|--------------------------------------------------------------------------
*/

const message =
    document.querySelector('textarea[name="message"]');

if (message) {

    const counter =
        document.querySelector(".character-count");

    message.addEventListener("input", function () {

        counter.textContent =
            this.value.length + " / 500 characters";

    });

}


/*
|--------------------------------------------------------------------------
| PREVENT DOUBLE SUBMISSION
|--------------------------------------------------------------------------
*/

document
    .getElementById("inquiryForm")
    .addEventListener("submit", function () {

        const button =
            this.querySelector(".submit-button");

        button.classList.add("loading");

        button.querySelector("span").textContent =
            "Submitting...";

        button.querySelector("i").className =
            "fa-solid fa-spinner fa-spin";

    });

    /* ==============================================
       EVENT MODAL
    ============================================== */

    function openEventModal() {

        const modal =
            document.getElementById("eventModal");

        modal.classList.add("active");

        document.body.style.overflow = "hidden";

    }


    function closeEventModal() {

        const modal =
            document.getElementById("eventModal");

        modal.classList.remove("active");

        document.body.style.overflow = "";

    }


    /* ==============================================
       LIGHTBOX
    ============================================== */

    function openGallery(image) {

        const lightbox =
            document.getElementById("lightbox");

        const lightboxImage =
            document.getElementById("lightboxImage");

        lightboxImage.src = image;

        lightbox.classList.add("active");

        document.body.style.overflow = "hidden";

    }


    function closeGallery() {

        const lightbox =
            document.getElementById("lightbox");

        lightbox.classList.remove("active");

        document.body.style.overflow = "";

    }


    /* ==============================================
       ESCAPE KEY
    ============================================== */

    document.addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Escape") {

                closeEventModal();

                closeGallery();

            }

        }
    );


    /* ==============================================
       CLOSE MODAL BY CLICKING BACKGROUND
    ============================================== */

    document.getElementById("eventModal")
        .addEventListener(
            "click",
            function(event) {

                if (event.target === this) {

                    closeEventModal();

                }

            }
        );