const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");

// Les données des slides
const slidesData = [
  {
    title: "Nature flower",
    description: "all in pink",
    color: "#FD3555",
    image:
      "https://images.unsplash.com/photo-1508768787810-6adc1f613514?ixlib=rb-0.3.5&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "Bluuue Sky",
    description: "with it's mountains",
    color: "#2A86BA",
    image:
      "https://images.unsplash.com/photo-1519981593452-666cf05569a9?ixlib=rb-0.3.5&auto=format&fit=crop&w=715&q=80",
  },
  {
    title: "Lonely castle",
    description: "in the wilderness",
    color: "#252E33",
    image:
      "https://images.unsplash.com/photo-1486899430790-61dbf6f6d98b?ixlib=rb-0.3.5&auto=format&fit=crop&w=1002&q=80",
  },
  {
    title: "Flying eagle",
    description: "in the sunset",
    color: "#FFB866",
    image:
      "https://images.unsplash.com/photo-1510942201312-84e7962f6dbb?ixlib=rb-0.3.5&auto=format&fit=crop&w=1050&q=80",
  },
];

// Générer dynamiquement les slides
slidesData.forEach((slide) => {
  const leftDiv = document.createElement("div");
  leftDiv.style.backgroundColor = slide.color;
  leftDiv.innerHTML = `<h1>${slide.title}</h1><p>${slide.description}</p>`;
  slideLeft.appendChild(leftDiv);

  const rightDiv = document.createElement("div");
  rightDiv.style.backgroundImage = `url('${slide.image}')`;
  slideRight.appendChild(rightDiv);
});

const slidesLength = slidesData.length;
let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

function changeSlide(direction) {
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) activeSlideIndex = 0;
  } else {
    activeSlideIndex--;
    if (activeSlideIndex < 0) activeSlideIndex = slidesLength - 1;
  }

  slideRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  slideLeft.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
}
