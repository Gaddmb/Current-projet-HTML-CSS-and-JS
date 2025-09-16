const faqContainer = document.querySelector(".faq-container");

// Données des FAQ
const faqsData = [
  {
    question: "Why shouldn't we trust atoms?",
    answer: "They make up everything",
    active: true,
  },
  {
    question: "What do you call someone with no body and no nose?",
    answer: "Nobody knows.",
  },
  {
    question: "What's the object-oriented way to become wealthy?",
    answer: "Inheritance.",
  },
  {
    question: "How many tickles does it take to tickle an octopus?",
    answer: "Ten-tickles!",
  },
  {
    question: "What is: 1 + 1?",
    answer: "Depends on who are you asking.",
  },
];

faqsData.forEach((faq) => {
  const faqDiv = document.createElement("div");
  faqDiv.classList.add("faq");
  if (faq.active) {
    faqDiv.classList.add("active");
  }

  faqDiv.innerHTML = `
    <h3 class="faq-title">${faq.question}</h3>
    <p class="faq-text">${faq.answer}</p>
    <button class="faq-toggle">
      <i class="fas fa-chevron-down"></i>
      <i class="fas fa-times"></i>
    </button>
  `;

  faqContainer.appendChild(faqDiv);
});

const toggles = document.querySelectorAll(".faq-toggle");
toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});
