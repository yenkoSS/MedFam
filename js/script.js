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

const textAboutList = document.querySelectorAll(".text-about");
const cardsServicesList = document.querySelectorAll(".card-services");
const cardsTeamList = document.querySelectorAll(".card-team");
const cardsFaqList = document.querySelectorAll(".card-faq");
const h3List = document.querySelectorAll("h3");
const cardContact = document.querySelector(".card-contact");
const imgAbout = document.querySelector(".box-img-about");

const offsetYObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("offset-y0", entry.isIntersecting);
    if (entry.isIntersecting) offsetYObserver.unobserve(entry.target);
  });
});

const offsetXObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("offset-x0", entry.isIntersecting);
    if (entry.isIntersecting) offsetXObserver.unobserve(entry.target);
  });
});

textAboutList.forEach((text) => offsetYObserver.observe(text));
cardsServicesList.forEach((card) => offsetYObserver.observe(card));
cardsTeamList.forEach((card) => offsetYObserver.observe(card));
cardsFaqList.forEach((card) => offsetYObserver.observe(card));
h3List.forEach((h3) => offsetXObserver.observe(h3));
offsetXObserver.observe(cardContact);
offsetXObserver.observe(imgAbout);

/* emailJS Configuration */

emailjs.init("eSvonNDBWdPw7EXFY"); /* emailJS public KEY*/

function sendEmail() {
  let params = {
    name: document.querySelector("#form-name").value,
    email: document.querySelector("#form-email").value,
    phone: document.querySelector("#form-phone").value,
    message: document.querySelector("#form-message").value,
  };

  const templateID = "template_952np1l"; /* emailJS templateID */
  const serviceId = "service_mywu9tt"; /* emailJS serviceID */

  emailjs.send(serviceId, templateID, params).then(alert('Mesaj transmis!"'));
}

document.querySelector(".form-contact").addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
});
