"use strict";
window.addEventListener("DOMContentLoaded", function () {
  // select account balance elements to append wallet and copy svges
  const accountWallet = document.querySelector(".account-svg");
  const accountCopy = document.querySelector(".copy-svg");
  // select btn that needs to be appended with plus icon
  const iconPlus = document.querySelector(".plus-icon");
  // select right sidebar's(transaction section's) elements for appending icons
  const trSvges = document.querySelectorAll(".squar-el");

  // defining side bar list <a> tags for appending icons
  const asideLinks = this.document.querySelectorAll(".logo-list ul li a");
  // defining element for dark and light mode btns
  const darkLight = document.querySelector(".dark-light-mode");
  const lightBtn = document.querySelector(".dark-light-mode .light");
  const darkBtn = document.querySelector(".dark-light-mode .dark");
  // function that appends single svg to single element at the begining
  const singleAppend = function (item, svg) {
    item.insertAdjacentHTML("afterbegin", svg);
  };
  // function that appens svges to multiple elements
  const appendSvges = (elements, svg) => {
    elements.forEach((item) => item.insertAdjacentHTML("afterbegin", svg));
  };
  // function that appends severel svges to several other elements
  const appendSvgesArr = (elements, svgArr) => {
    elements.forEach((item, idx) =>
      item.insertAdjacentHTML("afterbegin", svgArr[idx]),
    );
  };
  // round numbers to specific number of decimals
  const decimalNumber = function (num, dec) {
    const quant = document.querySelectorAll(num);
    quant.forEach((item) => {
      const txt = Number(item.textContent);
      item.textContent = txt.toFixed(dec);
    });
  };

  // right side bar payment amount toFixed function
  decimalNumber(".tr-quant>span", 2);
  decimalNumber(".fr-cur", 4);
  decimalNumber(".nat-cur", 2);
  // append icons to transaction section's elements
  trSvges.forEach((item) => {
    const svgName = [...item.classList].at(-1);
    singleAppend(item, eval(svgName));
  });

  // appending svges to side bar <a> tags
  appendSvgesArr(asideLinks, allSidebarSvges);

  // appending svgs to dark and light mode btns
  singleAppend(lightBtn, sunSvg);
  singleAppend(darkBtn, moonSvg);
  singleAppend(iconPlus, plusSvg);
  singleAppend(accountCopy, copySvg);
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
