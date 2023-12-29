// All variables
const carouselContainer = document.getElementById("carousel-container");
const slide = document.querySelector(".carousel-slide");
const prevButton = document.getElementById("carousel-arrow-prev");
const nextButton = document.getElementById("carousel-arrow-next");

var count = 1;

// 📁 Scroll to left by width of 1 slide
nextButton.addEventListener("click", (event) => {
    const slideWidth = slide.clientWidth;
    carouselContainer.scrollLeft += slideWidth;

    // if end reached go back to 1st
    count++;
    if (count > 4) {
        carouselContainer.scrollLeft -= (slideWidth * 4);
        count = 1; // leftmost slide
    }

    console.log(count);
});

// 📁 Scroll to right by width of 1 slide
prevButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    carouselContainer.scrollLeft -= slideWidth;

    // if we reach left end go to rightmost slide
    count--;
    if (count <1) {
        carouselContainer.scrollLeft += (slideWidth * 4);
        count = 4;  //rightmost slide
    }

    console.log(count);
});