const tabContent = document.querySelectorAll(".tab__content-item");
const tabList = document.querySelectorAll(".tab__list");
const tabItem = document.querySelectorAll(".tab__item");
const tab = document.querySelectorAll(".tab");

tabItem.forEach((item, index) => {
  let contentItem = tabContent[index];
  item.addEventListener("click", () => {
    const tabActive = document.querySelector(".tab__item--active");
    tabActive.classList.remove("tab__item--active");

    const tabContentActive = document.querySelector(
      ".tab__content-item--active"
    );
    tabContentActive.classList.remove("tab__content-item--active");

    item.classList.add("tab__item--active");
    contentItem.classList.add("tab__content-item--active");
  });
});

const navbarItem = document.querySelectorAll(".navbar__link");

navbarItem.forEach((item) => {
  item.addEventListener("click", () => {
    const itemActive = document.querySelector(".navbar__link--active");
    console.log(itemActive);
    itemActive.classList.remove("navbar__link--active");
    item.classList.add("navbar__link--active");
  });
});
