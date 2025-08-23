const hero = document.querySelector(".section-hero");

const navObserverCallback = (watchEntry, navObserver) => {
  if (!watchEntry[0].isIntersecting) {
    document.body.classList.add("sticky");
  } else {
    document.body.classList.remove("sticky");
  }
};

let navObserver = new IntersectionObserver(navObserverCallback);

navObserver.observe(hero);

// 漢堡選單
const header = document.querySelector("header");
const burgerBtn = document.querySelector(".btn-mobile-nav");

burgerBtn.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

const navLinks = document.querySelectorAll(".main-nav a");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    header.classList.remove("nav-open");
  });
});
