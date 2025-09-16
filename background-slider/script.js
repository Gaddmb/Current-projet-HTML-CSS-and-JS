const slider = document.getElementById("slider");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

// Tableau des images
const images = [
  "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=2100&q=80",
  "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?auto=format&fit=crop&w=1934&q=80",
  "https://images.unsplash.com/photo-1495467033336-2effd8753d51?auto=format&fit=crop&w=2100&q=80",
  "https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?auto=format&fit=crop&w=2689&q=80",
  "https://images.unsplash.com/photo-1559087867-ce4c91325525?auto=format&fit=crop&w=2100&q=80",
];

let activeSlide = 0;

// Création dynamique des slides
images.forEach((img, index) => {
  const slide = document.createElement("div");
  slide.classList.add("slide");

  if (index === 0) {
    slide.classList.add("active");
  }

  slide.style.backgroundImage = `url('${img}')`; // image via background
  slider.appendChild(slide);
});

const slides = document.querySelectorAll(".slide");

// Navigation droite
rightBtn.addEventListener("click", () => {
  activeSlide++;
  if (activeSlide >= slides.length) {
    activeSlide = 0;
  }
  setActiveSlide();
});

// Navigation gauche
leftBtn.addEventListener("click", () => {
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }
  setActiveSlide();
});

// Met à jour la slide active
function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[activeSlide].classList.add("active");
}
