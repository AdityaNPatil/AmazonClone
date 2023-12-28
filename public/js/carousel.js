// All variables
const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

var count = 1;

// 📁 Scroll to left by width of 1 slide
nextButton.addEventListener("click", (event) => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;

    // if end reached go back to 1st
    count++;
    if (count > 4) {
        slidesContainer.scrollLeft -= (slideWidth * 4);
        count = 1; // leftmost slide
    }

    console.log(count);
});

// 📁 Scroll to right by width of 1 slide
prevButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;

    // if we reach left end go to rightmost slide
    count--;
    if (count <1) {
        slidesContainer.scrollLeft += (slideWidth * 4);
        count = 4;  //rightmost slide
    }

    console.log(count);
});