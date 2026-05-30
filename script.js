const year = document.querySelector("#year");
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#nav-links");
const navItems = [...document.querySelectorAll(".nav-links a")];
const sections = [...document.querySelectorAll("main section[id]")];

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

const updateActiveLink = () => {
  let current = null;

  for (let index = sections.length - 1; index >= 0; index -= 1) {
    if (sections[index].getBoundingClientRect().top <= 120) {
      current = sections[index];
      break;
    }
  }

  navItems.forEach((item) => {
    item.classList.toggle("is-active", current ? item.hash === `#${current.id}` : item.hash === "#intro");
  });
};

updateActiveLink();
window.addEventListener("scroll", updateActiveLink, { passive: true });
