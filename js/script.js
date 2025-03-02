document.querySelectorAll(".nav-header-link-lg").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = link.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelectorAll(".nav-footer-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = link.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelector(".logo-header").addEventListener("click", (e) => {
  e.preventDefault();
  const id = document.querySelector(".logo-header").getAttribute("href");
  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".logo-footer").addEventListener("click", (e) => {
  e.preventDefault();
  const id = document.querySelector(".logo-footer").getAttribute("href");
  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  if (scrollY > 700) {
    document.querySelector(".nav-header").classList.add("fixed-nav");
  }
  if (scrollY < 700) {
    document.querySelector(".nav-header").classList.remove("fixed-nav");
  }
});

/* CARDS FAQ */

document.querySelectorAll(".card-faq").forEach((card) => {
  card.addEventListener("click", (e) => {
    const currentElement = e.currentTarget;
    const textDetailsCardFaq = e.currentTarget.querySelector(".text-details-card-faq");
    const textTitleCardFaq = e.currentTarget.querySelector(".text-title-card-faq");

    if (
      currentElement.style.backgroundColor === "" ||
      currentElement.style.backgroundColor === "white"
    ) {
      textDetailsCardFaq.style.display = "block";
      textDetailsCardFaq.style.color = "white";
      textTitleCardFaq.style.color = "white";
      textTitleCardFaq.classList.add("mbot-30");
      card.style.backgroundColor = "var(--color-blue-med)";
    } else if (currentElement.style.backgroundColor === "var(--color-blue-med)") {
      textDetailsCardFaq.style.display = "none";
      textDetailsCardFaq.style.color = "white";
      textTitleCardFaq.style.color = "var(--color-blue-light)";
      textTitleCardFaq.classList.remove("mbot-30");
      card.style.backgroundColor = "white";
    }
  });
});

/* CARDS FAQ END */

document.querySelector(".icon-menu-nav-header").addEventListener("click", () => {
  document.querySelector(".nav-header-list-sm").style.display = "flex";
});

document.querySelector(".icon-close").addEventListener("click", () => {
  document.querySelector(".nav-header-list-sm").style.display = "none";
});

document.querySelectorAll(".nav-header-link-sm").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = link.getAttribute("href");
    document.querySelector(".nav-header-list-sm").style.display = "none";
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});
