window.addEventListener("DOMContentLoaded", function () {
  const appendSvges = (elements, svg) => {
    elements.forEach((item) => item.insertAdjacentHTML("afterbegin", svg));
  };
  const appendSvgesArr = (elements, svgArr) => {
    elements.forEach((item, idx) =>
      item.insertAdjacentHTML("afterbegin", svgArr[idx]),
    );
  };

  // search form icon elements
  const searchIcon = document.querySelector("header .search-svg");
  const searchExit = document.querySelector("header .search-exit");
  // arrow icons general
  const arrowIcon = document.querySelectorAll(".arrow-icon");
  // user drop down icons
  const userDropEl = document.querySelectorAll(".user-drop li small");

  // append icons to user drop down list
  appendSvgesArr(userDropEl, userIconsArr);
  // appending arrow icons in arrow spans
  appendSvges(arrowIcon, arrowSvg);

  // search form appending icons to elements
  searchIcon.insertAdjacentHTML("afterbegin", searchSvg);
  searchExit.insertAdjacentHTML("afterbegin", exitSvg);
});
