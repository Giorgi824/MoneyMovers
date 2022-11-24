window.addEventListener("DOMContentLoaded", function () {
  const trSvges = this.document.querySelectorAll("[data-svg]");
  // function that appends single svg to single element at the begining
  const singleAppend = function (item, svg) {
    item.insertAdjacentHTML("afterbegin", svg);
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
    const svgName = item.dataset.svg;
    singleAppend(item, eval(svgName));
  });
});
